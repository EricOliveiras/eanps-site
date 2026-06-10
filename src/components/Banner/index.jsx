import './style.css'

const Banner = () => {
  return (
    <section id="inicio" className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <span className="banner-tag">Saúde Mental &amp; Bem-Estar</span>
          <h2 className="banner-headline">
            Você não precisa<br />
            enfrentar isso{' '}
            <span className="banner-highlight">sozinho.</span>
          </h2>
          <p className="banner-subheadline">
            Um espaço seguro e acolhedor para cuidar da sua saúde mental e emocional — com escuta profissional, respeito e cuidado humano.
          </p>
          <div className="banner-actions">
            <a
              href="https://api.whatsapp.com/send?phone=5591993369464&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Agendar consulta pelo WhatsApp"
            >
              Agendar Minha Consulta
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conhecer os Serviços
            </a>
          </div>
          <p className="banner-reassurance">
            <span aria-hidden="true">✓</span> Atendimento presencial e online
            &nbsp;&nbsp;
            <span aria-hidden="true">✓</span> Sigilo profissional garantido
          </p>
        </div>
        <div className="banner-image-wrap">
          <img
            src="/images/banner.svg"
            alt="Ilustração de pessoa em sessão de terapia num ambiente acolhedor"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
