import './style.css'

const Header = () => {
    return (
      <header id="header">
        <div className="logo">
          <h1 id="header-title"><a href="/">EANPS</a></h1>
          <p id="header-paragraph">ESPAÇO DE ATENDIMENTO NEURO, PSICO E PEDAGÓGICO</p>
        </div>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header
  