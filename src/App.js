import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navigation";
import { Parallax, Background } from "react-parallax";

function App() {
  const image1 =
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <div className="App">
      <Navbar />
      <div id="BigImageContainer">
      <Parallax bgImage={image1}>
        <div id="home_image">
          <h1>ATXHacks</h1>
          <button>Register</button>
        </div>
      </Parallax>

      </div>
    </div>
  );
}

export default App;
