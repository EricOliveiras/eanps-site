import ServiceCard from "../ServiceCard"

import './style.css'

const Services = () => {
  return (
    <section id="services">
      <h1 id="services-title">Nossos Serviços</h1>
      <div id="services-list">
        <ServiceCard 
          srcImg={"/images/idea2.svg"}
          title={"Psicologia infantil e adulta"}
          text={"Nosso serviço de Psicologia Infantil e Adulta está comprometido em promover o bem-estar mental e emocional de crianças e adultos de todas as idades. Reconhecemos que a saúde mental desempenha um papel fundamental na qualidade de vida e, por isso, oferecemos suporte especializado para ajudar nossos clientes a enfrentarem desafios emocionais, psicológicos e comportamentais."}
        />
        <ServiceCard 
          srcImg={"/images/idea3.svg"}
          title={"Terapia infantil e adulta"}
          text={"A terapia infantil e adulta desempenha um papel fundamental na promoção do bem-estar emocional e na melhoria da qualidade de vida de indivíduos de todas as idades. Ela é uma ferramenta valiosa para ajudar as pessoas a superarem desafios emocionais, psicológicos e comportamentais, proporcionando um ambiente seguro e de apoio para a expressão de sentimentos e preocupações."}
        />
        <ServiceCard 
          srcImg={"/images/idea1.svg"}
          title={"Psicopedagogia infantil e adulta"}
          text={"A Psicopedagogia é uma disciplina que desempenha um papel crucial no apoio ao aprendizado e no desenvolvimento de crianças e adultos. Ela se concentra na identificação e na resolução de dificuldades de aprendizado, bem como na promoção de estratégias eficazes para o sucesso educacional. Aqui, destacamos a importância da Psicopedagogia nas duas faixas etárias, infantil e adulta."}
        />
        <ServiceCard 
          srcImg={"/images/brain.svg"}
          title={"Neuropsicopedagogia Infantil e Adulta"}
          text={"A Neuropsicopedagogia é uma disciplina interdisciplinar que se concentra na relação entre o funcionamento do cérebro e o processo de aprendizado. Ela visa entender como os processos cognitivos afetam a capacidade de aprendizado e busca identificar e tratar desafios de aprendizado relacionados à neurologia. Aqui, exploramos a importância da Neuropsicopedagogia em ambos os contextos, infantil e adulto."}
        />
      </div>
    </section>
  )
}

export default Services