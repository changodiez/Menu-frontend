import React from "react";
import mobileqr from "./../Assets/mobil-qr.png";
import { BrowserRouter as Router } from 'react-router-dom'

export default function MenuQr() {
  
  const scrollToX =()=>{
    const carrouselContainer = document.getElementById('carrousel-container');
   if (carrouselContainer.scrollLeft < window.innerWidth * 1.7){    
     carrouselContainer.scrollBy(window.innerWidth, 0);   
    } else{
      carrouselContainer.scrollBy(-1 * window.innerWidth * 2, 0);
   }
  }

  return (
    <section id="MenuQR" className="MenuQR">
      <div onClick={() => scrollToX()} id="arrow-right">
        &#65310;
      </div>
      <Router>
        <div id="carrousel-container" className="carrousel-container">
          <div className="section-qr-container ">
            <div className="img-qr-container">
              {" "}
              <div className="QR-desktop">
                <h1 className="header-QR-desktop">
                  Mi <br /> Qarta
                </h1>
                <p className="QR-text-desktop">
                  {" "}
                  Las cartas QR llegaron para protegernos de la amenaza del
                  COVID-19. Conoce màs sobre la nueva opciòn que además cuida
                  nuestro planeta.
                </p>
              </div>
              <img className="img-qr" src={mobileqr} alt="" />{" "}
            </div>
            <div className="buttons-caption-qr-container">
              <h1 className="header-QR-mobile">
                Mi <br /> Qarta
              </h1>
              <button className="button-qr">Ver Demo</button>
              <p className="QR-text-mobile">
                {" "}
                Las cartas QR llegaron para protegernos de la amenaza del
                COVID-19. Conoce màs sobre la nueva opciòn que además cuida
                nuestro planeta.
              </p>
            
            </div>
          </div>
          <div className="section-qr-container ">
            <ul className="grid-container">
              <li>Plan de pago mensual</li>
              <li>Diseño de carta interactiva</li>
              <li>Filtros de preferencia</li>
              <li>Mantenimiento mensual</li>
              <li>Traducción a 3 idiomas</li>
              <li>Barra de Busqueda</li>
              <li>Servidor seguro todo el año</li>
              <li>Codigo QR y enlace propio</li>
              <li>Adhesivos para tus mesas</li>
            </ul>
            <div className="buttons-caption-qr-container">
              <h1 className="header-QR">
                BENEFICIOS
                <br /> MI QARTA
              </h1>
            </div>
          </div>
          <div className="section-qr-container ">
            <div className="references-container">
              <h1>REFERENCIAS</h1>
              <p>
                <i>
                  {" "}
                  "Desde que usamos la carta segura podemos cuidar de nuestros
                  clientes para que disfruten con total seguridad. <br />
                  Funciona super rápido y podemos mostrarles solo las opciones
                  de comida que les gusten en su idioma.
                </i>
              </p>
              <h6>Mauri, de Polito. </h6>
            </div>
            <div className="buttons-caption-qr-container">
              <h1 className="header-QR">
                QUIÉNES <br /> USAN MI QARTA
              </h1>
            </div>
          </div>
        </div>
      </Router>
    </section>
  );
}
