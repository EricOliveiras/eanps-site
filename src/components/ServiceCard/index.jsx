import './style.css'

const ServiceCard = ({ title, srcImg, text, alt }) => {
  return (
    <div className="service-card-container">
      <img src={srcImg} alt={alt || title} className="service-img" />
      <div className="service-card-info">
        <h3 className="service-title">{title}</h3>
        <p className="service-paragraph">{text}</p>
      </div>
    </div>
  )
}

export default ServiceCard
