import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsersShow } from "./UsersShow"
import { Signup } from "./Signup"
import { Login } from "./Login"


function App() {
  // eslint-disable-next-line no-undef
  axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

  return (
      <BrowserRouter>
        <div>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users/:id" element={<UsersShow />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;