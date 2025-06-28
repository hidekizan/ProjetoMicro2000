import '../pagescss/Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import banner1 from '../components/imagens/banner1.png';
import banner2 from '../components/imagens/banner2.png';
import banner3 from '../components/imagens/banner3.png';


function Home() {
  
    const config = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return(
      <section className='w-full h-full'>
          
              
                  <div className="" id="slider-produtos">
                  <Slider {...config}>
                    <img src={banner1} alt="banner 1"/>
                    <img src={banner2} alt="banner 2"/>
                    <img src={banner3} alt="banner 3"/>
                  </Slider>
                  </div>
          </section>
    );
}

export default Home;