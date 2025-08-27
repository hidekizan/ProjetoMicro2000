import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../components/imagens/logo-micro2000.png';
import { Home, Wrench, MessageCircle, User } from "lucide-react";

const Header = () => {
  const navigate = useNavigate(); // hook do React Router

  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerContainer}>

      <div className={styles.headerLeft}>

          <a href="/" className={styles.headerLogo}>
          <img src={logo} alt="Logo Micro2000"/>
          </a>

          <div className={styles.headerNavigation}>
          <Link to="/" className={styles.navItem}>
            <Home size={18} /> <span>Home</span>
          </Link>
          <Link to="/servicos" className={styles.navItem}>
            <Wrench size={18} /> <span>Serviços</span>
          </Link>
          <Link to="/contato" className={styles.navItem}>
            <MessageCircle size={18} /> <span>Contato</span>
          </Link>
          </div>

      </div>
        <div className={styles.headerButtons}>
<button
  className={styles.btnPrimary}
  onClick={() => navigate('/login')}
>
  <User size={18} /> <span>Acesse sua conta</span>
</button>
        </div>

      </div>

      <div className={styles.headerDivider}></div>
    </nav>
  );
};

export default Header;
