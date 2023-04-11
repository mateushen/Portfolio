import { useState } from 'react'
import './App.scss'
import Header from './components/header';
import Footer from './components/footer';
import Summary from './components/summary';
import previous from './global/img/icon-previous.png'
import next from './global/img/icon-next.png'

function App() {

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
          <Summary />
          <button className="btn-step" onClick={buttonClickNext}><img src={next} /></button>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default App
