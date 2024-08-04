import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"

const HomePage = () => {
  return (
    <>
    <Hero>
      <Banner title='Luxurious Rooms' subtitle='Deluxe rooms starting at $299' >
        <Link to='rooms/' className="btn-primary" >our rooms</Link>
      </Banner>
    </Hero>
    <Services></Services>
    </>
    
  )
}

export default HomePage