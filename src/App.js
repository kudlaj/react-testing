import { useState } from 'react';
import './App.css';

export const createNewColor = () => {

}

function App() {
  const [buttonColor, setButtonColor] = useState('blue');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div className="App">
      <h1>Testing demo</h1>
      <div><button style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >Turn to {newButtonColor}</button></div>
    </div>
  );
}

export default App;
