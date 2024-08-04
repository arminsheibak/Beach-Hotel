import { Link } from 'react-router-dom'
import Room from '../entities/room'

interface Props {
  room: Room
}

const RoomCard = ({room}: Props) => {
  return (
    <article className="room">
      <div className="img-container">
          <img src={room.fields.images[0].fields.file.url} alt={room.fields.name} />
          <div className="price-top">
            <h6>{room.fields.price}</h6>
            <p>per night</p>
          </div>
        <Link to={`/rooms/${room.fields.slug}`} className='btn-primary room-link'  >
        Features
        </Link>
      </div>
      <p className='room-info' >{room.fields.name}</p>
    </article>
  )
}

export default RoomCard