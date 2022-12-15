import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UsersShow() {
  const params = useParams();
  const [user, setUser] = useState([]);

  const handleShowUser = () => {
    axios.get(`/users/${params.id}`).then((response) => {
      console.log(response.data);
      setUser(response.data);
      
    })
  }

  useEffect(handleShowUser, []);

  return (
    <div>
      <h1>{user.user_name} </h1>
      <h2>{user.address}</h2>
      <h3>Rating: {user.average_rating}</h3>
      <h4>Contact Radio: {user.contact_radio}</h4>
      <p>{user.phone_number}</p>
      <p>Hours: {user.hours_of_operation}</p>
      {/* change the two lines below after service_fuel becomes boolean */}
      <p>{user.service_fuel == "t" && "Service Fuel: Yes"}</p>
      <p>{user.service_fuel == "f" && "Service Fuel: No"}</p>
      <p>{user.service_facilities == true && "Service Facilities: Yes"}</p>
      <p>{user.service_facilities == false && "Service Facilities: No"}</p>
      <p>{user.has_car == true && "Car Available: Yes"}</p>
      <p>{user.has_car == false && "Car Available: No"}</p>
      <p>{user.winter_services == true && "Winter Services: Yes"}</p>
      <p>{user.winter_services == false && "Winter Services: No"}</p>
      <p>{user.other_services == true && "Other Services: Yes"}</p>
      <p>{user.other_services == false && "Other Services: No"}</p>

      <h2>Reviews</h2>
      {user.received_reviews?.map((review) => (
        <div key={review.id}>
          <p>{review.created_at}</p>
          <h4>{review.author_name}:</h4>
          {review.body}
          
        </div>
      ))}
    </div>
  )
}