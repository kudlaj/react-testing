import { render, screen, fireEvent } from '@testing-library/react';
import AppButton from './AppButton'


describe('App Test Suite', () => {
    
    test('should have a button', () => {
        const mockHandler = jest.fn()
        render(<AppButton buttonLabel='My button' buttonColor='red' onClickFunct={mockHandler} />);
        const element = screen.getByRole('button');
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
        expect(mockHandler.mock.calls).toHaveLength(1);
    });
});
