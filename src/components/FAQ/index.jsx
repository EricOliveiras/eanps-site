import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import './style.css'

const FAQ_ITEMS = [
  {
    question: 'A terapia é para mim?',
    answer:
      'A terapia é para qualquer pessoa que deseja se entender melhor, lidar com dificuldades emocionais ou desenvolver recursos para os desafios da vida. Você não precisa estar em crise para começar — muitas pessoas chegam buscando autoconhecimento e qualidade de vida.',
  },
  {
    question: 'Como é a primeira sessão?',
    answer:
      'A primeira sessão é um momento de conhecimento mútuo. O profissional vai escutar o que te trouxe até aqui, entender sua história e suas necessidades. Não há certo ou errado — você pode falar no seu ritmo, sobre o que se sentir confortável.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    answer:
      'Oferecemos atendimento presencial e online, de acordo com a sua necessidade e preferência. Entre em contato para verificar as opções disponíveis e encontrar a modalidade que funciona melhor para você.',
  },
  {
    question: 'Com que frequência acontecem as sessões?',
    answer:
      'A frequência mais comum é de uma sessão por semana. Mas o ritmo pode variar conforme o processo terapêutico e as necessidades de cada pessoa. Isso é sempre discutido e combinado entre você e o profissional.',
  },
  {
    question: 'O que acontece nas sessões é confidencial?',
    answer:
      'Sim. O sigilo profissional é um dos pilares fundamentais da psicologia e está garantido pelo Código de Ética do Conselho Federal de Psicologia (CFP). Tudo o que você compartilhar nas sessões permanece entre você e o profissional.',
  },
  {
    question: 'Quanto tempo dura o processo terapêutico?',
    answer:
      'O tempo de terapia é muito individual e depende de cada pessoa, dos objetivos e do processo. Não existe uma duração pré-definida. O importante é que você sinta que está evoluindo e que o processo faça sentido para você.',
  },
]

const FAQItem = ({ question, answer, id }) => {
  const [open, setOpen] = useState(false)
  const answerId = `faq-answer-${id}`
  const btnId = `faq-btn-${id}`

  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button
        id={btnId}
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span>{question}</span>
        <BsChevronDown
          className={`faq-chevron${open ? ' faq-chevron--up' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={btnId}
        className="faq-answer"
        hidden={!open}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="section-tag">Dúvidas frequentes</span>
          <h2 className="section-title">Perguntas frequentes</h2>
          <p className="faq-subtitle">
            Tire suas dúvidas sobre o atendimento e o processo terapêutico
          </p>
        </div>

        <dl className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              id={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </dl>

        <p className="faq-footer-note">
          Não encontrou o que procurava?{' '}
          <a
            href="https://api.whatsapp.com/send?phone=5591993369464&text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco pelo WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}

export default FAQ
