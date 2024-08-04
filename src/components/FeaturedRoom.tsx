import { useContext } from 'react';
import RoomsContext from '../contexts/roomsContext';
import SectionTitle from './SectionTitle'
import RoomCard from './RoomCard';

const FeaturedRoom = () => {
  const {rooms} = useContext(RoomsContext);
  const featuredRooms = rooms.filter(r => r.fields.featured === true)
  return (
    <section className='featured-rooms' >
    <SectionTitle title='Featured Rooms' />
    <div className="featured-rooms-center">
      {featuredRooms.map(room => <RoomCard room={room} key={room.sys.id} />)}
    </div>

    </section>
  )
}

export default FeaturedRoom