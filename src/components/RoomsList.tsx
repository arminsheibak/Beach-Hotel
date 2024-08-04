import { useContext } from "react"
import RoomsContext from "../contexts/roomsContext"
import RoomCard from "./RoomCard"

const RoomsList = () => {
  const {rooms, setRooms} = useContext(RoomsContext)

  if (rooms.length == 0) {
    return ( 
    <div className="empty-search">
      <h3>unfortunately no rooms matched your search</h3>
    </div>
    )
  }
  
  return (
    <section className="roomslist" >
      <div className="roomslist-center">
        {rooms.map(room => <RoomCard key={room.sys.id} room={room} />)}
      </div>
    </section>
  )
}

export default RoomsList