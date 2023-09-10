import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

import './style.css'

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-info">
        <h2>Entre em Contato</h2>
        <p>Fale conosco para obter mais informações:</p>
        <ul>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5591993369464" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="icon"/>
              EANPS WhatsApp
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/eanps2021/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BsInstagram className="icon"/>
              EANPS Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact

