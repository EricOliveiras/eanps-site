import './style.css'

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, srcImg, text }) => {
  return (
    <div className="service-card-container">
      <img src={`${srcImg}`} alt="" className="service-img" />
      <div className="service-card-info">
        <h3 className="service-title">{title}</h3>
        <p className="service-paragraph">{text}</p>
      </div>
    </div>
  )
}

export default ServiceCard