import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import RoomsContext from './contexts/roomsContext'
import { useState } from 'react'
import Room from './entities/room'
import data from './data'

function App() {
  const [rooms, setRooms] = useState<Room[]>(data)
  
  return (
    <RoomsContext.Provider value={{rooms, setRooms}} >
    <NavBar />
    <Outlet />
    </RoomsContext.Provider>
  )
}

export default App
