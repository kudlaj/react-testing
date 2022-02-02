import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';

const mockChildComponent = jest.fn();
jest.mock('./components/AppChildElement', () => (props) => {
  mockChildComponent(props);
  return <div>{props.label}</div>;
});

describe('App Test Suite', () => {

  test('should have a button', () => {
    render(<App />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  test('should have a button with the initial text: "Turn to red" and the color blue', () => {
    render(<App />);
    const element = screen.getByRole('button', { name: 'Turn to red' });
    expect(element).toHaveStyle({ backgroundColor: 'blue' })
  });

  test('should have a button that turns to red when clicked and change the text to "Turn to blue"', () => {
    render(<App />);
    const element = screen.getByRole('button', { name: 'Turn to red' });
    fireEvent.click(element);
    debugger;
    expect(element).toHaveStyle({ backgroundColor: 'red' });
    expect(element).toHaveTextContent('Turn to blue');
  });

  test('should pass data to child component', () => {
    const utils = render(<App />);
    expect(mockChildComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        label: 'Test label'
      })
    );
  });

});
