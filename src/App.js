import Colculator from "./components/Colculator";
import {useState} from "react"


function App() {
  const [showCalc, setShowCalc] = useState(false);

  return (
    <>
      <button className="btn" onClick={()=> setShowCalc(!showCalc)}>Show Calc</button>
      {showCalc ? <Colculator /> : null}
    </>
    
  );
}

export default App;
