import './home.scss';
import Header from '../../components/header';
import eu from '../../global/img/eu.png';
import Card from '../../components/card';
import iconPhp from '../../global/img/php.png';
import iconJs from '../../global/img/js.png';
import iconC from '../../global/img/c.png';
import iconCPP from '../../global/img/cpp.png';
import iconCSharp from '../../global/img/csharp.png';
import iconHtml from '../../global/img/html.png';
import iconCss from '../../global/img/css.png';


function Home() {
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
              <Card icon='facebook' />
              <Card icon='instagram' />
              <Card icon='linkedin' />
              <Card icon='github' />
            </div>
          </div>


          <div className="about-me">
            <h2 className="title-aboutme">Habilidades</h2>
            <div className="container-skills">
              <img src={iconC} width="55" />
              <img src={iconCPP} width="55" />
              <img src={iconCSharp} width="55" />
              <img src={iconHtml} width="55" />
              <img src={iconCss} width="55" />
              <img src={iconPhp} width="55" />
              <img src={iconPhp} width="55" />
              <img src={iconJs} width="55" />
            </div>

          </div>
        </div>

        <div className="container-right">

          <div className="about-me">
            <h2 className="title-aboutme">SOBRE MIM</h2>
            <div className="container-about">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatum, nemo libero eligendi at, cupiditate velit reprehenderit sed, obcaecati numquam ducimus rerum quod facilis quis magnam sapiente voluptatibus natus? Debitis?
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;