
import './App.css';
import Game from './compenent/Game'
import HallOfFame from "./compenent/HallOfFame"
function App() {
  return (
    <div className="container" >
      Cookie clicker
        <Game></Game>
        <HallOfFame></HallOfFame>
    </div>
  );
}

export default App;
