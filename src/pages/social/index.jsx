import './social.scss'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/card';
import iconFace from '../../global/img/icon-face.png';

function Social() {
  return (
    <>
      <Header />
      <div className="container-cards">
        <div className="cards">
          <div className="card-line">
            <Card icon='facebook' />
            <Card icon='instagram' />
            <Card icon='github' />
            <Card icon='linkedin' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Social;