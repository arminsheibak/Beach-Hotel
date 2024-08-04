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
    <>
    <Hero heroClass="roomsHero" backgroundImageUrl={room.fields.images[0].fields.file.url} >
      <Banner title={room.fields.name}>
      <Link to='/rooms' className="btn-primary" >Back to Rooms</Link>
      </Banner>
    </Hero>
    <section className="single-room">
      <div className="single-room-images">
      {room.fields.images.filter((image, index) => index !== 0).map((image) => <img key={image.fields.file.url} src={image.fields.file.url} />)}
      </div>
      <div className="single-room-info">
        <article className="description" >
          <h3>Details</h3>
          <p>{room.fields.description}</p>
        </article>
        <article className="info">
          <h3>Info</h3>
          <h6>Price : ${room.fields.price}</h6>
          <h6>Size: {room.fields.size} SQFT</h6>
          <h6>Max Capacity: {room.fields.capacity} {room.fields.capacity > 1 ? 'People' : 'Person'}</h6>
          <h6>{room.fields.pets ? 'Pets Allowed' : 'No Pets Allowed!'}</h6>
          {room.fields.breakfast && <h6>Free Breakfast</h6>}
        </article>
      </div>
    </section>
    <section className="room-extras">
      <h6>Extras</h6>
      <ul className="extras">
        {room.fields.extras.map(extra => <li key={extra}>{extra}</li>)}
      </ul>
    </section>
    </>
  )
}

export default RoomDetail