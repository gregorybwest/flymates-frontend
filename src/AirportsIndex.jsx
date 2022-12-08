export function AirportsIndex(props) {
  return (
    <div>
      <h1>All Airports</h1>
      {props.airports.map((airport) => (
        <div key={airport.id}>
          <h2>{airport.name}</h2>
          <p>Adress: {airport.address}</p>
        </div>
      ))}
    </div>
  )
}