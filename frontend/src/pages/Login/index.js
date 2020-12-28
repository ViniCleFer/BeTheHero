import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Login() {
  const [ongId, setOngId] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', {id: ongId});

      localStorage.setItem('ongId', ongId);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Erro ao logar, tente novamente.')
    }

  }

  return (
    <div className="login-container">
      <section className="form">
      <img src={logoImg} alt="Heroes" />

      <form onSubmit={handleSubmit}>
        <h1>Faça seu Login</h1>

        <input placeholder="Sua ID" value={ongId} onChange={e => setOngId(e.target.value)} />
        <button className="button" type="submit">Entrar</button>

        <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
      </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
