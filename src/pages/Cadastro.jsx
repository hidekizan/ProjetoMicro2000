import React from "react";

function Cadastro() {
  return (
    <main>
      <section className="main-section">
        <div className="div-h1">
          <h1 className="texto-h1">Cadastro de clientes</h1>
        </div>

        <div className="div-input">
          <i className="fa-solid fa-user"></i>
          <input
            type="text"
            placeholder="Insira seu nome completo"
            required
            autoComplete="off"
          />
        </div>

        <div className="div-input">
          <i className="fa-solid fa-lock"></i>
          <input type="text" placeholder="Senha" required autoComplete="off" />
        </div>

        <div className="div-input">
          <i className="fa-solid fa-address-card"></i>
          <input type="text" placeholder="CPF" required autoComplete="off" />
        </div>

        <div className="div-input">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="E-mail" required autoComplete="off" />
        </div>

        <div className="div-input">
          <i className="fa-solid fa-phone"></i>
          <input
            type="text"
            placeholder="Telefone celular"
            required
            autoComplete="off"
          />
        </div>

        <div className="div-input">
          <button className="btn-finalizar" type="button">
            Finalizar Cadastro
          </button>
        </div>

        <div className="conta">
          <div>Já possui cadastro?</div>
          <li>
            <a href="#">Entre aqui!</a>
          </li>
        </div>
      </section>
    </main>
  );
}

export default Cadastro;