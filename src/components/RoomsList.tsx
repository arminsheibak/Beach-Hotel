import { useContext } from "react"
import RoomsContext from "../contexts/roomsContext"
import RoomCard from "./RoomCard"
import FilterQueryContext from "../contexts/roomsFiltersContext"

const RoomsList = () => {
  const {rooms} = useContext(RoomsContext)
  const {filterQuery} = useContext(FilterQueryContext)

  const filteredRoom = rooms.filter(room => {
    if (filterQuery.type !== 'all')
      return room.fields.type === filterQuery.type
    return room
  })

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
        {filteredRoom.map(room => <RoomCard key={room.sys.id} room={room} />)}
      </div>
    </section>
  )
}

export default RoomsList