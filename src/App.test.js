import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const findButton = () => {
  return screen.getByRole('button', {name: 'Turn to red'});
};

describe('App Test Suite', () => { 
  test('should have a button', () => {
    render(<App />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  test('should have a button with the initial text: "Turn to red" and the color blue', () => {
    render(<App />);
    const element = findButton();
    expect(element).toHaveStyle({ backgroundColor: 'blue'})
  });

  test('should have a button that turns to red when clicked and change the text to "Turn to blue"', () => {
    render(<App />);
    const element = screen.getByRole('button', {name: 'Turn to red'});
    fireEvent.click(element);
    debugger;
    expect(element).toHaveStyle({ backgroundColor: 'red'});
    expect(element).toHaveTextContent('Turn to blue');
  });

});
