import { useState } from 'react';
import AppButton from './components/AppButton';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('blue');
  const buttonLabel = buttonColor === 'red' ? 'Turn to blue' : 'Turn to red';
  const toggleColor = () => {
    setButtonColor(buttonColor === 'red' ? 'blue' : 'red');
  }
  return (
    <div className="App">
      <h1>Testing demo</h1>
      <AppButton buttonLabel={buttonLabel} buttonColor={buttonColor} onClickFunct={toggleColor} />
    </div>
  );
}

export default App;
