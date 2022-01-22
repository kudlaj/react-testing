import { render, screen, fireEvent } from '@testing-library/react';
import App, { createNewColor } from './App';


export const findButton = () => {
  return screen.getByRole('button', {name: 'Turn to red'});
};

describe('App Component', () => {
  
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

  test('should have a button that turns to red when clicked and change the text to', () => {
    render(<App />);
    const element = screen.getByRole('button', {name: 'Turn to red'});
    fireEvent.click(element);
    expect(element).toHaveStyle({ backgroundColor: 'red'});
    expect(element.textContent).toBe('Turn to blue');
  });

});

describe('Testing create color function', () => {
  test('should call createColor Function and return a new color', () => {
    createNewColor();
    fail();
  });
});

