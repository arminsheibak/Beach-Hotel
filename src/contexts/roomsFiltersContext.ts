import React, { Dispatch } from "react";

export interface filterQuery {
  type: string;
}

interface filterQueryContextType {
  filterQuery: filterQuery;
  setFilterQuery: Dispatch<React.SetStateAction<filterQuery>>
}

const FilterQueryContext = React.createContext<filterQueryContextType>({} as filterQueryContextType);
export default FilterQueryContext;