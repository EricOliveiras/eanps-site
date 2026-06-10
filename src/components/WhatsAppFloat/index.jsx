import { BsWhatsapp } from 'react-icons/bs'
import './style.css'

const WhatsAppFloat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5591993369464&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar com EANPS pelo WhatsApp"
    >
      <BsWhatsapp className="whatsapp-float-icon" aria-hidden="true" />
      <span className="whatsapp-float-label">Falar pelo WhatsApp</span>
    </a>
  )
}

export default WhatsAppFloat
