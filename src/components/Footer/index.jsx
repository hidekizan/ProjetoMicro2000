import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-content">
        <div className="footer-row flex-row">
          <div className="footer-col">
            <h2 className="col-title">Sobre nós</h2>
            <ul>
              <li><a href="/nossa-empresa">Nossa empresa</a></li>
              <li><a href="/atendimento-ao-cliente">Atendimento ao cliente</a></li>
              <li><a href="/canal-de-denuncias">Canal de Denúncias</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="col-title">Serviços</h2>
            <ul>
              <li><a href="/servicos">Conheça quais serviços prestamos!</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="col-title">Contato</h2>
            <ul>
              <li><a href="/comunidade">Whatsapp</a></li>
              <li><a href="/meio-ambiente">Meio Ambiente</a></li>
              <li><a href="/fornecimento-etico">Fornecimento ético</a></li>
              <li><a href="/historias-starbucks">Histórias Starbucks</a></li>
            </ul>
          </div>

          <div className="endereco-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.02951412969!2d-51.40249602471257!3d-22.12485037981313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f44c9099600d%3A0xd30e1d70c29a08a8!2sMicro2000!5e0!3m2!1spt-BR!2sbr!4v1745362293453!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Micro2000"
            ></iframe>
          </div>
        </div>

        <div className="separator"></div>

        <div className="footer-row flex-col">
          <div className="footer-meio">
            <p>Rua Lauro Queiroz, 261 - Vila Oriental / Presidente Prudente - São Paulo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
