import './header.scss'
import Icon from '../../assets/img/portfolio.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header-icon">
                <img src={Icon} width="40" />
            </div>
        </header>
    )
}