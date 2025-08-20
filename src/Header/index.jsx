// src/components/Header.tsx

import { Menu, User, Phone } from "lucide-react";
import micro2000Logo from "../components/imagens/logo-micro2000.png";

const Header = () => {
  const navigation = [
    { name: "Home" },
    { name: "Serviços" },
    { name: "Sobre" },
    { name: "Soluções" },
    { name: "Suporte" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img
              src={micro2000Logo}
              alt="MICRO2000"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-bold text-primary tracking-wide">
              MICRO2000
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <span
                key={item.name}
                className="text-sm font-medium transition duration-200 hover:text-primary hover:border-b-2 hover:border-primary pb-1 cursor-pointer"
              >
                {item.name}
              </span>
            ))}
          </div>

          {/* Botão */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-lg text-sm font-medium hover:bg-muted transition">
              <User className="h-4 w-4 mr-2" />
              Cadastrar
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition">
              Entrar
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-700 hover:opacity-90 transition">
              <Phone className="h-4 w-4 mr-2" />
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;