import './home.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import eu from '../../global/img/eu.png';
import Card from '../../components/card';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-left">
          <div className="container-cards">
          <h2>MATEUS HENRIQUE</h2>
            <img src={eu} width="150" />
            <div className="card-line">
              <Card icon='facebook' />
              <Card icon='instagram' />
              <Card icon='linkedin' />
              <Card icon='github' />
            </div>
          </div>
        </div>

        <div className="container-right">

          <h2>SOBRE MIM</h2>
          <div className="bar"></div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;