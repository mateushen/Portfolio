import './style.scss'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/card';

function Social() {
  return (
    <>
      <Header />
      <div className="container-cards">
        <div className="cards">
          <div className="card-line">
            <Card icon='facebook'/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Social;