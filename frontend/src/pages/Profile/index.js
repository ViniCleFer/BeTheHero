import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const [incidents, setincidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadCases() {
      const incidentsList = await api.get('profile', {
        headers: {
          authorization: ongId,
        }
      });

      setincidents(incidentsList.data);
    }

    loadCases();
  }, []);

  async function handleDeleteCase(id) {
    try {
      const response = await api.delete(`incidents/${id}`, {
        headers: {
          authorization: ongId,
        }
      });

      if (response.status === 204) {
        setincidents(incidents.filter(incident => incident.id !== id));
        alert('Caso excluído com sucesso!');
      } else {
        alert('Erro ao excluir caso, tente novamente mais tarde.');
      }
    } catch (err) {
      alert('Erro ao excluir caso, tente novamente mais tarde.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Heroes" />
        <span>Bem Vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            <button type="button" onClick={() => handleDeleteCase(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
