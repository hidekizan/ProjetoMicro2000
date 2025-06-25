import React from "react";
import '../pagescss/Cadastro.css';

function Cadastro() {
  return (
    <main className="relative w-full h-screen flex items-center justify-end overflow-hidden">
      {/* Fundo da página */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm -z-10"
        style={{ backgroundImage: "url('/imagens/FACHADA-1.jpg')" }}
      />

      {/* Seção do formulário */}
      <section className="bg-white/60 border-l-2 border-[#1b57aa] w-[40vw] h-full flex flex-col items-center justify-center">
        <div className="text-[#1b57aa] text-center mb-12 w-3/4">
          <h1 className="text-4xl font-bold font-[Cal Sans]">Cadastro de clientes</h1>
        </div>

        {[
          { icon: "fa-user", placeholder: "Insira seu nome completo" },
          { icon: "fa-lock", placeholder: "Senha" },
          { icon: "fa-address-card", placeholder: "CPF" },
          { icon: "fa-envelope", placeholder: "E-mail" },
          { icon: "fa-phone", placeholder: "Telefone celular" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 w-3/4 mb-4">
            <i className={`fa-solid ${item.icon} text-black w-5`}></i>
            <input
              type="text"
              placeholder={item.placeholder}
              required
              autoComplete="off"
              className="w-full h-10 rounded-lg px-3 border border-gray-300 font-[Cal Sans]"
            />
          </div>
        ))}

        <button
          type="button"
          className="w-2/5 py-3 mt-4 bg-[#1b57aa] hover:bg-[#144a93] text-white font-[Cal Sans] rounded-lg transition duration-300"
        >
          Finalizar Cadastro
        </button>

        <div className="flex gap-2 mt-8 text-lg font-[Cal Sans]">
          <div>Já possui cadastro?</div>
          <a href="#" className="text-blue-700 hover:underline">
            Entre aqui!
          </a>
        </div>
      </section>
    </main>
  );
}

export default Cadastro;
