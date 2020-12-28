import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import'./styles.css';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

function NewIncident() {
  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleCreateIncident() {
    const data = {
      title,
      description,
      value,
    };

    try {
      const response = await api.post('incidents', data, {
        headers: {
          authorization: ongId,
        },
      });

      if (response.status === 200) {
        setTitle('');
        setDescription('');
        setValue('');
        history.push('/profile');
      } else {
        alert('Erro no cadastro de Casos, tente novamente.');
      }
    } catch (err) {
      alert('Erro no cadastro de Casos, tente novamente.');
    }
  }

  function handleCancel() {
    setTitle('');
    setDescription('');
    setValue('');
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do caso" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Valor em reais" />

          <div className="btn-area">
            <button className="button" type="button" onClick={() => handleCreateIncident()}>Cadastrar</button>
            <button className="button-cancel" type="button" onClick={() => handleCancel()}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;