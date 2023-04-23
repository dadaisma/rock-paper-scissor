
//import './App.css';
import { Analytics } from'@vercel/analytics/react';
import Game from "./components/game";


function App() {
  return (
    <div className="App">
      <Game />
       
      <Analytics />
    </div>
  );
}

export default App;
