import './style.css'

const VALUES = [
  {
    icon: '🤝',
    label: 'Escuta ativa',
    description: 'Sem julgamentos, com acolhimento',
  },
  {
    icon: '🔒',
    label: 'Sigilo total',
    description: 'O que é dito aqui, fica aqui',
  },
  {
    icon: '⭐',
    label: 'Cuidado personalizado',
    description: 'Cada pessoa, um atendimento único',
  },
]

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <div className="about-image-wrap">
          <img
            src="/images/free.svg"
            alt="Ilustração de pessoa recebendo atendimento psicológico acolhedor"
          />
        </div>
        <div className="about-content">
          <span className="section-tag about-tag">Sobre o EANPS</span>
          <h2 className="section-title">
            Um espaço criado para quem busca ser ouvido
          </h2>
          <p className="about-text">
            O <strong>EANPS — Espaço de Atendimento Neuro, Psico e Pedagógico</strong> nasceu da crença de que toda pessoa merece um lugar seguro para falar, sentir e crescer.
          </p>
          <p className="about-text">
            Aqui, você encontra profissionais comprometidos com a sua saúde mental e emocional, prontos para caminhar junto com você no processo de autoconhecimento e superação de desafios.
          </p>
          <p className="about-text">
            Nosso atendimento é individualizado, respeitoso e sigiloso — porque acreditamos que cada história é única e merece atenção especial.
          </p>

          <div className="about-values" aria-label="Nossos valores">
            {VALUES.map(({ icon, label, description }) => (
              <div className="value-item" key={label}>
                <span className="value-icon" role="img" aria-hidden="true">{icon}</span>
                <div>
                  <strong>{label}</strong>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
