import axios from "axios";
import { useState, useEffect } from "react";
import { AirportsIndex } from "./AirportsIndex"

export function Home() {
  const [airports, setAirports] = useState([]);

  const handleIndexAirports = () => {
    console.log("handleIndexAirports");
    axios.get("http://localhost:3000/airports.json").then((response) => {
      console.log(response.data);
      setAirports(response.data);
    })
  }

  useEffect(handleIndexAirports, []);

  return (
    <div>
      <AirportsIndex airports={airports} />
    </div>
  );
}