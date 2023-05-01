import './home.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import eu from '../../global/img/eu.png';
import Card from '../../components/card';
import iconPhp from '../../global/img/php.png';
import iconJs from '../../global/img/js.png';
import iconC from '../../global/img/c.png';
import iconCPP from '../../global/img/cpp.png';
import iconCSharp from '../../global/img/csharp.png';
import iconHtml from '../../global/img/html.png';
import iconCss from '../../global/img/css.png';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  function handleProjects() {
      return navigate('/projects');
  }

  return (
    <>
      <Header />
      <div className="container-home">
        <div className="container-left">
          <div className="container-cards">
            <h2 className="title">MATEUS HENRIQUE</h2>
            <span className="subtitle">ESTUDANTE</span>
            <img src={eu} width="150" />
            <div className="card-line">
              <Card icon='linkedin' />
              <Card icon='facebook' />
              <Card icon='instagram' />
              <Card icon='github' />
            </div>
          </div>

          <div style={{ marginLeft: "15rem" }} className="my-skills">
            <h2 className="title-aboutme">Habilidades</h2>
            <div className="container-skills">
              <img src={iconC} width="80" />
              <img src={iconCPP} width="80" />
              <img src={iconCSharp} width="80" />
              <img src={iconHtml} width="80" />
              <img src={iconCss} width="80" />
              <img src={iconPhp} width="80" />
              <img src={iconJs} width="80" />
            </div>

            <button className="my-projects" onClick={handleProjects}>VER PROJETOS...</button>

          </div>
        </div>

        <div className="container-right">

          <div className="about-me">
            <h2 className="title-aboutme">SOBRE MIM</h2>
            <div className="container-aboutme">
              <p>
                Meu nome é Mateus, tenho 21 anos e nasci em Virginópolis. Desde cedo,
                desenvolvi um grande interesse na área de TI (Tecnologia da Informação),
                o que me levou a cursar Sistemas de Informação no IFMG Campus Sâo João Evangelista.
              </p>
            </div>
          </div>

          <div style={{ marginRight: "15rem" }} className="about-me">
            <h2 className="title-aboutme">FORMAÇÃO</h2>
            <div className="container-aboutme">
              <p>↪ Ensino Fundamental ↩</p>
              <p>
                Escola Estadual Professor Francisco Dias
              </p>
              <br />
              <p>↪ Ensino Médio ↩</p>
              <p>
                Escola Estadual Nossa Senhora do Patrocínio
              </p>
              <br />
              <p>↪ Ensino Superior ↩</p>
              <p>
                IFMG - Campus São João Evangelista
              </p>
            </div>
          </div>

          <div style={{ marginLeft: "15rem" }} className="about-me">
            <h2 className="title-aboutme">INSPIRAÇÃO</h2>
            <div className="container-aboutme">
              <p>
                "Nunca desista dos seus objetivos!"
              </p>
              <br />
              <p>
                Eu sou empenhado em alcançar seus objetivos. Eu valorizo meus
                esforços e todas as dificuldades que passo, acredito que isso
                me fará evoluir cada vez mais, tanto no quesito pessoal,
                quanto no profissional.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home;