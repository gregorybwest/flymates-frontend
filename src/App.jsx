import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import axios from "axios";

function App() {
  // eslint-disable-next-line no-undef
  axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;