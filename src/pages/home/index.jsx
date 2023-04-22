import { useEffect, useState } from 'react'
import './style.scss'
import Header from '../../components/header';
import Footer from '../../components/footer';
import previous from '../../global/img/icon-previous.png'
import next from '../../global/img/icon-next.png'
import eu from '../../global/img/eu.png';

function Home() {

  const [step, setStep] = useState(1);

  function buttonClickPrevious() {
    setStep(step - 1);
  }

  function buttonClickNext() {
    setStep(step + 1);
  }

  useEffect(() => {
    if(step > 2 || step < 1) {
      setStep(1);
    }
  })

  return (
    <>
      <Header />
      <div className="container">
        <img src={eu} width="500" />
        <div className="main">
          <button className="btn-step" onClick={buttonClickPrevious}><img src={previous} /></button>
          {step == 1 && (
            <div className="about-me">
              <h2 className="title">Um pouco sobre mim!</h2>
              <span className="description">
                Meu nome é Mateus, tenho 21 anos e nasci em Virginópolis.
                Desde cedo, desenvolvi um grande interesse na área de TI
                (Tecnologia da Informação), o que me levou a cursar Sistemas de
                Informação no IFMG Campus Sâo João Evangelista.
              </span>
            </div>
          )}

          { step == 2 && (
            <span className="description">Trabalho duro para alcançar meus objetivos e 
              o meu objetivo principal é terminar o curso no fim do ano.
               Além disso, eu adoro jogar futebol, baralho e jogos eletrônicos, 
               que me permitem um momento de diversão no meu tempo livre.</span>
          )}
          <button className="btn-step" onClick={buttonClickNext}><img src={next} /></button>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Home;
