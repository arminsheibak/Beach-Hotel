import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import RoomsContext from "../contexts/roomsContext";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const RoomDetail = () => {
  const {rooms} = useContext(RoomsContext)
  const {slug} = useParams();
  const room = rooms.find(room => room.fields.slug === slug)

  if (!room) {
    return (
      <Hero>
      <Banner title="404" subtitle="Room not Found" >
        <Link to='/rooms' className="btn-primary" >Back to Rooms</Link>
      </Banner>
    </Hero>
    )
  }

  return (
    <Hero heroClass="roomsHero" backgroundImageUrl={room.fields.images[0].fields.file.url} >
      <Banner title={room.fields.name}>
      <Link to='/rooms' className="btn-primary" >Back to Rooms</Link>
      </Banner>
    </Hero>
  )
}

export default RoomDetail