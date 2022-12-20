import { Link } from "react-router-dom"
import { useState } from "react";

export function AirportsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="airports-index">
      <h1>All Airports</h1>
      Search by Airport Code:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="airports" />
      {props.airports
        .filter((airport) => airport.code.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((airport) => 
      <div key={airport.id}>
      <h1>{airport.name} ({airport.code})</h1>
      <h4>Address: {airport.address}</h4>
      <h3>FBOs: {airport.users.map((user) => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>
          {user.user_name}
          </Link>
          , Rating: {user.average_rating}</p>
      ))}</h3>
      </div>)}
    </div>
  )
}