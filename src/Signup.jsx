import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        // window.location.href = "/"; 
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Username: <input name="user_name" type="text" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation: <input name="password_confirmation" type="password" />
        </div>
        <div>
          Are You A Business?: <input className="form-control"  name="is_business" type="radio" value="true" />
          <label htmlFor="yes">Yes</label>
          <input className="form-control" name="is_business" type="radio" value="false" />
          <label htmlFor="no">No</label>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}