import './style.css'

const FOOTER_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src="/images/sunflower_logo.png" alt="Logotipo EANPS" className="footer-logo-img" />
              <strong className="footer-logo">EANPS</strong>
            </div>
            <p className="footer-tagline">Espaço de Atendimento Neuro, Psico e Pedagógico</p>
          </div>
          <nav aria-label="Links do rodapé" className="footer-nav">
            {FOOTER_LINKS.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} EANPS — Todos os direitos reservados</p>
          <p>
            Desenvolvido por{' '}
            <a href="https://github.com/EricOliveiras" target="_blank" rel="noopener noreferrer">
              Eric Oliveira
            </a>
            {' · '}
            Imagens por{' '}
            <a href="https://br.freepik.com/autor/stories" target="_blank" rel="noopener noreferrer">
              Storyset
            </a>
            {' '}no Freepik
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
