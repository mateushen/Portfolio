import './header.scss'

export default function Header() {
    return (
        <header className="container">
            <div className="title">
                <h1>Mateus Henrique</h1>
            </div>
            <div className="header">
                <a className="header-comp">Home</a>
                <a className="header-comp">Sobre</a>
                <a className="header-comp">Redes Sociais</a>
            </div>

        </header>
    )
}