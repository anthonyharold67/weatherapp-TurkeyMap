
import './App.css';
import TurkeyMap from 'turkey-map-react';
import CitySelect from './components/CitySelect';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(false);
  const [header,setHeader]=useState('');
  const handleClick=()=>{
    setShow(!show);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Select Map</button>
      <button onClick={handleClick}>Select List</button>
      <h1>{header}</h1>
      {show && <TurkeyMap onClick={ ({ plateNumber, name }) => setHeader(plateNumber + " - " + name ) } />}
      {!show && <CitySelect setHeader={setHeader} />}
    </div>
  );
}

export default App;
