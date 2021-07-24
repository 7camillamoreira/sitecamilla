import img from "../../assets/imgs/Image.png"
import img1 from "../../assets/imgs/cadernos.png"
import img2 from "../../assets/imgs/caixadelapis.png"
import img3 from "../../assets/imgs/canetinhas.png"
import img4 from "../../assets/imgs/estojos.png"
import img5 from "../../assets/imgs/lapiseiras.png"
import img6 from "../../assets/imgs/borrachas.png"
import { H1, Main, Container, Watermark, H2, Section } from "./home.style"
export default function Home(){

    return (

        <Container>
            <Main>
                <Watermark>
                    <H1>Papelaria da Camomilla</H1>
                    <img src={img} alt="imagem de papel e canetas"/>
                </Watermark>
            </Main>

            <Section>
                <H2>Veja nossos produtos</H2>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
            </Section>

            <footer>
                <h3>Obrigada pela visita</h3>
            </footer>

        </Container>
        
    )
}
