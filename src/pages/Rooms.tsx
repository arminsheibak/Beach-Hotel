import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import RoomsList from "../components/RoomsList"

const Rooms = () => {
  return (
    <>
    <Hero heroClass="roomsHero" >
      <Banner title="Our Rooms" >
        <Link to='/' className="btn-primary" >Return Home</Link>
      </Banner>
    </Hero>
    <RoomsList />
    </>
  )
}

export default Rooms