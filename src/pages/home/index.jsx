import { useState } from 'react'
import './style.scss'
import Header from '../../components/header';
import Footer from '../../components/footer';
import previous from '../../global/img/icon-previous.png'
import next from '../../global/img/icon-next.png'

function Home() {

  const [step, setStep] = useState(1);

  function buttonClickPrevious() {
    setStep(step - 1);
  }

  function buttonClickNext() {
    setStep(step + 1);
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <button className="btn-step" onClick={buttonClickPrevious}><img src={previous} /></button>
          {step == 1 && (
            <div className="about-me">
              <span>
                Meu nome é Mateus, tenho 21 anos e nasci em Virginópolis.
                Desde cedo, desenvolvi um grande interesse na área de TI
                (Tecnologia da Informação), o que me levou a cursar Sistemas de
                Informação no IFMG Campus Sâo João Evangelista.
              </span>
            </div>

          )}
          <button className="btn-step" onClick={buttonClickNext}><img src={next} /></button>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Home;
