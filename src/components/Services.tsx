import SectionTitle from "./SectionTitle"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

interface Service {
  icon: any;
  title: string;
  info: string;
}

const Services = () => {
  const services: Service[] = [
    { icon: <FaCocktail /> , title:'Free Cocktails' , info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut!'},
    { icon: <FaHiking />  , title: 'Endless Hiking'  , info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut!'},
    { icon:  <FaShuttleVan /> , title: 'Free Shuttle'  , info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut!'},
    { icon: <FaBeer /> , title: 'Strongest Beer'  , info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut!'},
  ]

  return (
    <section className="services" >
    <SectionTitle title="Services" />
    <div className="services-center">
      {services.map(service => {
        return <article key={service.title} className="service" >
          <span>{service.icon}</span>
          <h6>{service.title}</h6>
          <p>{service.info}</p>
        </article>
      } )}
    </div>
    </section>
  )
}

export default Services