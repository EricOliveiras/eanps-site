import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import './style.css'

const Contact = () => {
  return (
    <section id="contato" className="contact-container">
      <div className="contact-inner">
        <span className="section-tag contact-tag">Estamos aqui por você</span>
        <h2 className="contact-title">
          Pronto para dar o primeiro passo?
        </h2>
        <p className="contact-subtitle">
          Entre em contato pelo WhatsApp e agendamos sua consulta. Sem compromisso, sem julgamentos — só cuidado e acolhimento.
        </p>

        <div className="contact-actions">
          <a
            href="https://api.whatsapp.com/send?phone=5591993369464&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn--whatsapp"
            aria-label="Falar com EANPS pelo WhatsApp"
          >
            <BsWhatsapp aria-hidden="true" />
            Falar pelo WhatsApp
          </a>
          <a
            href="https://www.instagram.com/eanps2021/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn--instagram"
            aria-label="Seguir EANPS no Instagram"
          >
            <BsInstagram aria-hidden="true" />
            Ver no Instagram
          </a>
        </div>

        <p className="contact-reassurance">
          Respondemos em horário comercial. Seu primeiro contato é gratuito e sem compromisso.
        </p>
      </div>
    </section>
  )
}

export default Contact
