import React, { useState } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const images = [
    {
      src: "/imagens/img1.png",
      width: 1248,
      height: 800,
      isSelected: true,
    },
    {
      src: "/imagens/img2.png",
      width: 1248,
      height: 800,
      tags: [
        { value: "Galery", title: "Imagens" },
        { value: "Fotos", title: "Carrosel" },
      ],
    },
    {
      src: "/imagens/img3.png",
      width: 1248,
      height: 800,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
  <div className="relative flex items-center justify-center h-screen bg-gray-100">
    {/* Botão Anterior */}
    <button
      onClick={handlePrev}
      className="absolute left-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      Anterior
    </button>

    {/* Imagem */}
    <div className="text-center max-w-full max-h-[80vh] mx-auto">
      <img
        src={images[currentIndex].src}
        width={images[currentIndex].width}
        height={images[currentIndex].height}
        alt={images[currentIndex].caption || "Imagem"}
        className="max-w-full max-h-[80vh] mx-auto"
      />
      {images[currentIndex].caption && (
        <p className="mt-4 text-gray-700">{images[currentIndex].caption}</p>
      )}
    </div>

    {/* Botão Próxima */}
    <button
      onClick={handleNext}
      className="absolute right-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      Próxima
    </button>
  </div>
);
};

export default Home;