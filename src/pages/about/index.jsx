import './about.scss'
import Header from '../../components/header';
import Footer from '../../components/footer';
import eu from '../../global/img/eu.png';
import iconTel from '../../global/img/icon-celular.png';
import iconAviao from '../../global/img/icon-aviao.png';

function About() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="container-left">
          <img src={eu} width="200" />
        </div>

        <div className="container-right">
          <h2>MATEUS HENRIQUE</h2>
          <div className="contact">
            <img src={iconTel} width="20" />
            <span style={{ marginLeft: 10 }}>+55 33 99939-1941</span>
          </div>
          <div className="contact">
            <img src={iconAviao} width="20" />
            <span style={{ marginLeft: 10 }}>mateus.hen65@gmail.com</span>
          </div>
          <div className="bar"></div>
          <h2>SOBRE MIM</h2>
          <div className="bar"></div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default About;
