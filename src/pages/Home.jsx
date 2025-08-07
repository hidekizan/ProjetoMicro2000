import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import

function Home() {
  
    const config = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return(
      <section className="gallery-container">
            <div className="gallery-product-service"> 
          
              <div className="product-block">
                <div className="product-title">
                  <h2>Produtos</h2>
                  <p className="product-text">Conheça nossa linha de produtos, de novos a recondicionados</p>
                </div>
                <div>
                  <div className="slider-images" id="slider-produtos">
                  <Slider {...config}>
                    <img src="img/controle_lg.avif" alt="Imagem 1"/>
                    <img src="img/kit_tintas_T504.JPG" alt="Imagem 2"/>
                    <img src="img/kit_tintas_T544.jpg.webp" alt="Imagem 3"/>
                  </Slider>
                  </div>
                </div>
              </div>
              <div className="service-block">
                <div className="service-title">
                  <h1>Serviços</h1>
                  <p className="service-text">Conheça os principais serviços que oferecemos</p>
                </div>
                <div>
                  <div className="slider-images2" id="slider-servicos">
                  <Slider {...config}>
                    <img src="img/servicos1.jpeg" alt="Imagem 4"/>
                    <img src="img/servicos2.jpeg" alt="Imagem 5"/>
                    <img src="img/servicos3.jpeg" alt="Imagem 6"/>
                    </Slider>
                  </div>
                </div>
              </div>
          
            </div>
          </section>
    );
}

export default Home;