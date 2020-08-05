import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Shape =()=>{
    return(
        <Container>
            <h1 className="wrap font-playfair-bold">NOTICIAS</h1>
            <Row>
                <Col>
                    <h6 className="hoy">HOY</h6>
                    <section className="wrap">
                        <h5 className="font-playfair-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore officia autem, possimus ipsum fugiat temporibus.</h5>
                        <p className="font-playfair">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam architecto ratione debitis vel voluptatum harum itaque nihil suscipit! Maiores aliquam voluptatibus sit cupiditate magni obcaecati modi vitae, consequatur accusantium! Totam commodi similique nemo voluptates quaerat repudiandae perspiciatis, distinctio mollitia eaque. Doloremque harum voluptas quisquam ea accusamus molestias veniam exercitationem cum.</p>
                    </section>
                    <section className="wrap">
                        <h5 className="font-playfair-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore officia autem, possimus ipsum fugiat temporibus.</h5>
                        <p className="font-playfair">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam architecto ratione debitis vel voluptatum harum itaque nihil suscipit! Maiores aliquam voluptatibus sit cupiditate magni obcaecati modi vitae, consequatur accusantium! Totam commodi similique nemo voluptates quaerat repudiandae perspiciatis, distinctio mollitia eaque. Doloremque harum voluptas quisquam ea accusamus molestias veniam exercitationem cum.</p>
                    </section>
                    <h5 className="font-playfair-bold">5 DE JULIO</h5>
                    <section className="wrap">
                        <h5 className="font-playfair-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore officia autem, possimus ipsum fugiat temporibus.</h5>
                        <p className="font-playfair">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam architecto ratione debitis vel voluptatum harum itaque nihil suscipit! Maiores aliquam voluptatibus sit cupiditate magni obcaecati modi vitae, consequatur accusantium! Totam commodi similique nemo voluptates quaerat repudiandae perspiciatis, distinctio mollitia eaque. Doloremque harum voluptas quisquam ea accusamus molestias veniam exercitationem cum.</p>
                    </section>
                </Col>
                <Col>
                    <section className="categories">
                        <h5 className="font-playfair-bold">Categorias</h5>
                        <ul>
                            <li>Aseo</li>
                            <li>Alimentación</li>
                            <li>Muebles</li>
                            <li>Electrodomesticos</li>
                            <li>Vehículos</li>
                        </ul>
                    </section>
                    <h1 className="wrap font-playfair-bold">De interes</h1>

                    <section className="wrap">
                        <h5 className="font-playfair-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore officia autem, possimus ipsum fugiat temporibus.</h5>
                        <p className="font-playfair">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam architecto ratione debitis vel voluptatum harum itaque nihil suscipit! Maiores aliquam voluptatibus sit cupiditate magni obcaecati modi vitae, consequatur accusantium! Totam commodi similique nemo voluptates quaerat repudiandae perspiciatis, distinctio mollitia eaque. Doloremque harum voluptas quisquam ea accusamus molestias veniam exercitationem cum.</p>
                    </section>
                    <section className="wrap">
                        <h5 className="font-playfair-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore officia autem, possimus ipsum fugiat temporibus.</h5>
                        <p className="font-playfair">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam architecto ratione debitis vel voluptatum harum itaque nihil suscipit! Maiores aliquam voluptatibus sit cupiditate magni obcaecati modi vitae, consequatur accusantium! Totam commodi similique nemo voluptates quaerat repudiandae perspiciatis, distinctio mollitia eaque. Doloremque harum voluptas quisquam ea accusamus molestias veniam exercitationem cum.</p>
                    </section>
                </Col>
            </Row>
        </Container>
    )

}
export default Shape;