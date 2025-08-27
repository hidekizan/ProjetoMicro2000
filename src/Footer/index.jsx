import React from "react";
import logo from '../components/imagens/logo-micro2000.png';
import styles from './Footer.module.css';

import Facebook from '../components/imagens/facebook.png';
import Instagram from '../components/imagens/instagram.png';
import Youtube from '../components/imagens/youtube.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerGrid}>

        <div className={styles.footerCol}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="Micro2000" />
            <span>MICRO2000</span>
          </div>
          <p className={styles.footerText}>
            Especialistas em reparo e manutenção de equipamentos eletrônicos. 
            Credenciados pelas principais marcas do mercado.
          </p>
          <div className={styles.footerSocial}>
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
            <a href="#"><img src={Youtube} alt="YouTube" /></a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Links Rápidos</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/servicos">Nossos Serviços</a></li>
            <li><a href="/sobre">Sobre a Empresa</a></li>
            <li><a href="/solucoes">Soluções</a></li>
            <li><a href="/suporte">Suporte Técnico</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Serviços</h3>
          <ul className={styles.footerLinks}>
            <li>Reparo de Impressoras</li>
            <li>Manutenção de TVs</li>
            <li>Notebooks e PCs</li>
            <li>Celulares</li>
            <li>Consoles de Videogame</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Contato</h3>
          <div className={styles.footerContact}>
            <p>📞 (18) 3223-5431</p>
            <p>✉ micro2000@micro2000.com.br</p>
            <p>
              📍 Rua Lauro Queiroz, 261<br />
              Vila Oriental - Presidente Prudente/SP<br />
              CEP: 19015-310
            </p>
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 MICRO2000. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;