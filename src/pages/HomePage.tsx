import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"
import { useContext } from "react"
import RoomsContext from "../contexts/roomsContext"

const HomePage = () => {
  const {rooms} = useContext(RoomsContext);

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