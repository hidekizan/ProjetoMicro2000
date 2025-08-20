import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import micro2000Logo from "../components/imagens/logo-micro2000.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={micro2000Logo} 
                alt="MICRO2000" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold">MICRO2000</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Especialistas em reparo e manutenção de equipamentos eletrônicos. 
              Credenciados pelas principais marcas do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre a Empresa
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/suporte" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Suporte Técnico
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Reparo de Impressoras</li>
              <li className="text-sm text-primary-foreground/80">Manutenção de TVs</li>
              <li className="text-sm text-primary-foreground/80">Notebooks e PCs</li>
              <li className="text-sm text-primary-foreground/80">Celulares</li>
              <li className="text-sm text-primary-foreground/80">Consoles de Videogame</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/80">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/80">contato@micro2000.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/70 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Rua da Tecnologia, 123<br />
                  Centro - São Paulo/SP<br />
                  CEP: 01234-567
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} MICRO2000. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;