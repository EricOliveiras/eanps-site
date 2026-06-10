import ServiceCard from '../ServiceCard'
import './style.css'

const SERVICES = [
  {
    srcImg: '/images/idea2.svg',
    title: 'Psicologia Infantil e Adulta',
    text: 'Quando os sentimentos ficam pesados demais para carregar sozinho, a Psicologia oferece um espaço de escuta seguro e sem julgamentos. Atendemos crianças e adultos que enfrentam ansiedade, depressão, dificuldades emocionais e outros desafios da vida — sempre com respeito e cuidado.',
    alt: 'Ilustração de atendimento psicológico acolhedor',
  },
  {
    srcImg: '/images/idea3.svg',
    title: 'Terapia Infantil e Adulta',
    text: 'Cada pessoa carrega sua história. Na terapia, você encontra um espaço para compreender melhor seus pensamentos, sentimentos e comportamentos — e desenvolver recursos internos para lidar com as dificuldades do dia a dia de forma mais leve.',
    alt: 'Ilustração de sessão de terapia',
  },
  {
    srcImg: '/images/idea1.svg',
    title: 'Psicopedagogia Infantil e Adulta',
    text: 'Aprender pode ser desafiador, e isso não tem nada a ver com inteligência ou capacidade. A Psicopedagogia identifica as raízes das dificuldades de aprendizagem e cria estratégias personalizadas para que cada pessoa descubra o seu próprio jeito de aprender.',
    alt: 'Ilustração de criança aprendendo com suporte especializado',
  },
  {
    srcImg: '/images/brain.svg',
    title: 'Neuropsicopedagogia Infantil e Adulta',
    text: 'Nosso cérebro é único e aprende de formas diferentes. A Neuropsicopedagogia une neurociência e educação para entender como cada pessoa processa informações — criando intervenções que respeitam as particularidades de cada um.',
    alt: 'Ilustração de cérebro e processo de aprendizagem',
  },
]

const Services = () => {
  return (
    <section id="servicos" className="services">
      <div className="services-inner">
        <div className="services-header">
          <span className="section-tag">O que oferecemos</span>
          <h2 className="section-title" id="services-title">Nossos Serviços</h2>
          <p className="services-subtitle">
            Cuidados especializados para cada fase da vida e cada necessidade
          </p>
        </div>
        <ul id="services-list" aria-label="Lista de serviços">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <ServiceCard
                srcImg={service.srcImg}
                title={service.title}
                text={service.text}
                alt={service.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
