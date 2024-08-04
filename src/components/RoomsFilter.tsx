import { useContext } from "react";
import SectionTitle from "./SectionTitle";
import FilterQueryContext from "../contexts/roomsFiltersContext";

const RoomsFilter = () => {
  const { filterQuery, setFilterQuery } = useContext(FilterQueryContext);

  return (
    <section className="filter-container">
      <SectionTitle title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={filterQuery.type}
            onChange={(event) =>
              setFilterQuery({ ...filterQuery, type: event.target.value })
            }
          >
            <option value="all">all</option>
            <option value="single">single</option>
            <option value="double">double</option>
            <option value="family">family</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
