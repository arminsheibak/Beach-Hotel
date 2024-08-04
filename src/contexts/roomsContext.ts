import React, { Dispatch } from "react";
import Room from "../entities/room";


interface RoomsContextType {
  rooms: Room[];
  setRooms: Dispatch<React.SetStateAction<Room[]>>
}

const RoomsContext = React.createContext<RoomsContextType>({} as RoomsContextType);

export default RoomsContext;