import Invitacion from "./components/Invitacion";
import './App.css';
import img1 from "./images/holograph1.webp";
import img2 from "./images/holograph2.webp";

function App() {

  return (
    <div className="bg-gray-900 ">
      <div className="background"></div>
      <div className="app">
      <img src={img2} className="absolute w-80 top-5 left-5 img opacity-40" alt="img"/>
      <img src={img1} className="absolute h-40 w-40 bottom-3 right-2 img opacity-40" alt="img"/>
      <Invitacion />
      </div>
    </div>
  );
}

export default App;
