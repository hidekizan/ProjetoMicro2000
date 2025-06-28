import React from "react";
import "../pagescss/Login.css"; // importa seu CSS

const Login = () => {
  return (
    <div className="body-login">
      <main>
        <section className="main-section">
          <div className="div-h1">
            <h1 className="texto-h1">
              Faça o login para acessar sua conta
            </h1>
          </div>

          <div className="div-input">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Insira seu e-mail"
              required
              autoComplete="off"
            />
          </div>

          <div className="div-input">
            <i className="fa-solid fa-lock"></i>
            <input
              type="text"
              placeholder="Insira sua senha"
              required
              autoComplete="off"
            />
          </div>

          <div className="div-input">
            <button className="btn-entrar" type="button">
              Entrar
            </button>
          </div>

          <div className="senha">
            <li>
              <a href="#">Esqueceu sua senha?</a>
            </li>
          </div>

          <div className="conta">
            <div>É novo aqui?</div>
            <li>
              <a href="#">Crie uma conta!</a>
            </li>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;