import './header.scss'
import { useNavigate } from 'react-router-dom';
import Icon from '../../global/img/portfolio.png';

export default function Header() {
    const navigate = useNavigate();

    function handleHome() {
        return navigate('/');
    }

    function handleProjects() {
        return navigate('/projects');
    }

    return (
        <header className="box-header">
            <div className="header-icon">
              <img src={Icon} width="40" />  
            </div>
            
            <div className="header">
                <button className="header-button" onClick={handleHome}>Início</button>
                <button className="header-button" onClick={handleProjects}>Projetos</button>
            </div>
        </header>
    )
}