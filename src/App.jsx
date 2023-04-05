import { useState } from 'react'
import './App.scss'
import Header from './components/header';
import Footer from './components/footer';
import Summary from './components/summary';

function App() {

  const [step, setStep] = useState(1);

  function buttonClick(){
    setStep(step+1);
  }

  return (
    <div>
      <Header />

      <main className="main">
        <Summary />
      </main>

      <Footer />
    </div>
  )
}

export default App
