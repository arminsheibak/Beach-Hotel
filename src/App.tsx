import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import RoomsContext from './contexts/roomsContext'
import { useState } from 'react'
import Room from './entities/room'
import data from './data'
import FilterQueryContext, { filterQuery } from './contexts/roomsFiltersContext'

function App() {
  const [rooms, setRooms] = useState<Room[]>(data)
  const [filterQuery, setFilterQuery] = useState<filterQuery>({type: 'all'} as filterQuery)
  
  return (
    <RoomsContext.Provider value={{rooms, setRooms}} >
    <FilterQueryContext.Provider value={{filterQuery, setFilterQuery}} >
    <NavBar />
    <Outlet />
    </FilterQueryContext.Provider>
    </RoomsContext.Provider>
  )
}

export default App
