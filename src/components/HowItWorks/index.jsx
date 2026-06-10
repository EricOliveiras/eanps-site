import './style.css'

const STEPS = [
  {
    number: '01',
    icon: '💬',
    title: 'Entre em Contato',
    description:
      'Envie uma mensagem pelo WhatsApp ou Instagram. Não precisa ter certeza se a terapia é para você — pode tirar suas dúvidas conosco sem compromisso.',
  },
  {
    number: '02',
    icon: '📅',
    title: 'Agende sua Sessão',
    description:
      'Combinamos um horário que funcione para você. O atendimento pode ser presencial ou online, de acordo com a sua necessidade e disponibilidade.',
  },
  {
    number: '03',
    icon: '🌱',
    title: 'Comece sua Jornada',
    description:
      'Na primeira sessão você vai conhecer o espaço, tirar suas dúvidas e começar a construir um caminho de autoconhecimento e bem-estar — no seu ritmo.',
  },
]

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <span className="how-tag">Simples e sem complicação</span>
          <h2 className="how-title">Como funciona o atendimento?</h2>
          <p className="how-subtitle">
            Dar o primeiro passo pode parecer difícil, mas é mais simples do que você imagina.
          </p>
        </div>

        <ol className="steps-list" aria-label="Etapas do processo de atendimento">
          {STEPS.map((step) => (
            <li key={step.number} className="step-card">
              <span className="step-number" aria-hidden="true">{step.number}</span>
              <span className="step-icon" role="img" aria-hidden="true">{step.icon}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="how-cta">
          <a
            href="https://api.whatsapp.com/send?phone=5591993369464&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-how"
            aria-label="Agendar consulta pelo WhatsApp"
          >
            Quero agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
