import './home.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Social from '../../components/social';
import Presentation from '../../components/presentation';
import Technologies from '../../components/technologies';
import Training from '../../components/training';
import AllProjects from '../../components/allProjects';
import { useState } from 'react';

function Home() {
  const [viewProjects, setViewProjects] = useState(false);

  function handleProjects() {
    setViewProjects(true);
  }

  function handleHome() {
    setViewProjects(false);
  }

  return (
    <>
      <Header />
      <div className="home-container">

        <div className="aboutme-container">
          <h1 className="name">MATEUS HENRIQUE</h1>
          <h2 className="subtitle">Desenvolvedor Front-End</h2>
          <p className="small-paragraph">Navegando no mar de tecnologias front-end com confiança.</p>
          <div className="socials">
            <Social icon='facebook' />
            <Social icon='linkedin' />
            <Social icon='instagram' />
            <Social icon='github' />
          </div>
        </div>

        <div className="home-components">
          {viewProjects ?
            <div className="components-list">
              <AllProjects />
              <button onClick={handleHome}>Voltar</button>
            </div>
            :
            <div className="components-list">
              <Presentation />
              <Technologies />
              <Training />
              
              <button onClick={handleProjects}>Ver todos</button>
            </div>


          }
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Home;