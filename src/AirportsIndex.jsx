export function AirportsIndex(props) {
  return (
    <div>
      <h1>All Airports</h1>
      {props.airports.map((airport) => (
        <div key={airport.id}>
          <h1>{airport.name} ({airport.code})</h1>
          <h4>Address: {airport.address}</h4>
          <h3>FBOs: {airport.users.map((user) => (
            <p key={user.id}>
              {user.user_name}, Rating: {user.average_rating}</p>
          ))}</h3>
        </div>
      ))}
    </div>
  )
}