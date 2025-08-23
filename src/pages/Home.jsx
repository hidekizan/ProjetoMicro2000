import React, { useState, useEffect } from "react";
import Imagem1 from "../components/imagens/img1.png";
import Imagem2 from "../components/imagens/img2.png";
import Imagem3 from "../components/imagens/img3.png";
import card1 from "../components/imagens/card1.jpeg";
import card2 from "../components/imagens/card2.png";
import card3 from "../components/imagens/card3.png";
import card4 from "../components/imagens/card4.png";
import "@fontsource/montserrat"; 
import "@fontsource/montserrat/700.css";



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Imagem1, Imagem2, Imagem3];
  const cards = [card1, card2, card3, card4];

  // Autoplay da galeria
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen p-4">
      {/* Galeria de Imagens */}
      <div className="relative w-full flex items-center justify-center mb-8">
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="w-full max-h-[60vh] object-cover"
        />
      </div>

      {/* Frase */}
      <div className="mb-4 p-4 w-full text-center">
        <p className="text-5xl font-bold text-center">
          Conheça Nossos Principais Serviços de Manutenção
        </p>
      </div>

      {/* Lista de serviços */}
      <div className="grid text-2xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center mb-8 w-full">
        <p className="p-4 font-semibold rounded bg-gray-100">Máquinas de Lavar</p>
        <p className="p-4 font-semibold rounded bg-gray-100">Impressoras</p>
        <p className="p-4 font-semibold rounded bg-gray-100">Televisores</p>
        <p className="p-4 font-semibold rounded bg-gray-100">Smartphones</p>
      </div>

      {/* Cards ocupando toda a largura */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full bg-gray-100 p-4 rounded shadow flex items-center justify-center"
          >
            <img
              src={card}
              alt={`Card ${index + 1}`}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
