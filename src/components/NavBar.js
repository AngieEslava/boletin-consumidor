import React from "react";
import noticonsumidor from "./images/noticonsumidor-centro.JPG";

const NavBar = () => {
  return (

      <header>
        <section className="wrapper">
          <h3 className="title-center">NOTICONSUMIDOR.COM.CO</h3>
          <img src={noticonsumidor} className="img-center" alt="noti" />
          <h6 className="title-center">
            Todo lo relacionado a la protección del consumidor en Colombia{" "}
            <br /> Cuide a su familia, nosotros le ayudamos.
          </h6>
          </section>
            <ul className="nav">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Aseo</a></li>
              <li><a href="#">Muebles</a></li>
              <li><a href="#">Electrodomesticos</a></li>
              <li><a href="#">Vehículos</a></li>
            </ul>
      </header>
  );
};
export default NavBar;
