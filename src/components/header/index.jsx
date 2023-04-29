import './header.scss'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    function handleHome() {
        return navigate('/');
    }

    function handleProjects() {
        return navigate('/projects');
    }

    function handleAbout() {
        return navigate('/about');
    }

    return (
        <header className="box-header">
            <div className="header">
                <button className="header-button" onClick={handleHome}>Home</button>
                <button className="header-button" onClick={handleProjects}>Projetos</button>
                <button className="header-button" onClick={handleAbout}>Sobre</button>
            </div>
        </header>
    )
}