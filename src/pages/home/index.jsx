import './home.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/social';
import { useNavigate } from 'react-router-dom';
import Presentation from '../../components/presentation';
import Skills from '../../components/skills';
import Training from '../../components/training';

function Home() {
  const navigate = useNavigate();

  function handleProjects() {
    return navigate('/projects');
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
            <Card icon='linkedin' />
            <Card icon='facebook' />
            <Card icon='instagram' />
            <Card icon='github' />
          </div>
        </div>

        <div className="home-components">
          <div className="components-list">
            <Presentation />
            <Skills />
            <Training />
            <Footer />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;