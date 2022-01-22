import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test Suite', () => {
  
  test('should have a button', () => {
    render(<App />);

  });

  xtest('should have a button with the initial text: "Turn to RED" and the color blue', () => {
    throw new Error('Not yet implemented');
  });

  xtest('should have a button that turns to red when clicked', () => {
    throw new Error('Not yet implemented');
  });

});

