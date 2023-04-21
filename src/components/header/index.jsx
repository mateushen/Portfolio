import './style.scss'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    function handleHome() {
        return navigate('/');
    }

    function handleAbout() {
        return navigate('/about');
    }

    function handleSocial() {
        return navigate('/social');
    }

    return (
        <header className="container">
            <div className="header">
                <button onClick={handleHome}>Home</button>
                <button onClick={handleAbout}>Sobre</button>
                <button onClick={handleSocial}>Redes Sociais</button>
            </div>
        </header>
    )
}