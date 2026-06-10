import { useState } from 'react'
import { BsList, BsX } from 'react-icons/bs'
import './style.css'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#faq', label: 'FAQ' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header id="header">
      <div className="header-container">
        <div className="logo">
          <a href="/" aria-label="EANPS — Voltar ao início">
            <img src="/images/sunflower_logo.png" alt="Logotipo EANPS" className="logo-img" />
            <div className="logo-text">
              <h1 id="header-title">EANPS</h1>
              <p id="header-paragraph">Espaço de Atendimento Neuro, Psico e Pedagógico</p>
            </div>
          </a>
        </div>

        <nav aria-label="Menu principal" className={menuOpen ? 'nav-open' : ''}>
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>{label}</a>
              </li>
            ))}
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5591993369464&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
                onClick={closeMenu}
                aria-label="Agendar consulta pelo WhatsApp"
              >
                Agendar Consulta
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="nav"
        >
          {menuOpen ? <BsX aria-hidden="true" /> : <BsList aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Header
