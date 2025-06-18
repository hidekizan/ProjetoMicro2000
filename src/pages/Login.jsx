import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/storage';
import { users } from '../data/users-constants';
import '../pagescss/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    const userFound = users.find(user => user.email === email);
    if (userFound) {
      const match = senha === userFound.senha;
      if (match) {
        setError('');
        login(JSON.stringify(userFound));
        navigate('/painel');
        return;
      }
      setError('Senha inválida');
      return;
    }
    setError('Usuário não encontrado');
  }

  return (
    <main className="login-main">
      <section className="main-section">
        <div className="div-h1">
          <h1 className="texto-h1">
            Faça o login para acessar sua conta
          </h1>
        </div>

        <div className="div-input">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Insira seu e-mail"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="div-input">
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Insira sua senha"
            required
            autoComplete="off"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="div-input">
          <button className="btn-entrar" type="button" onClick={handleLogin}>
            Entrar
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="senha">
          <li><a href="#">Esqueceu sua senha?</a></li>
        </div>

        <div className="conta">
          <div>É novo aqui?</div>
          <li><a href="#">Crie uma conta!</a></li>
        </div>
      </section>
    </main>
  );
}

export default Login;