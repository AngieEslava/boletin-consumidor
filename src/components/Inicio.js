import React from 'react'
import NavBar from './NavBar'
import noticonsumidor from './images/noticonsumidor-centro.JPG'

const Inicio =()=>{
    return(
        <div className="inicio">
            <h1 className="title-center">NOTICONSUMIDORfxdcghubj.COM.CO</h1>
            <img src={noticonsumidor} className="img-center" alt="noti"/>
            <h4 className="title-center">Todo lo relacionado a la protección del consumidor en Colombia <br/> Cuide a su familia, nosotros le ayudamos.</h4>
            <NavBar />
        </div>
    )
}
export default Inicio;
