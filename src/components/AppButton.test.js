import { render, screen, fireEvent } from '@testing-library/react';
import AppButton from './AppButton'


describe('App Test Suite', () => {
    
    test('should have a button and execute function when clicked', () => {
        const mockHandler = jest.fn();
        const utils = render(<AppButton buttonLabel='My button' buttonColor='red' onClickFunct={mockHandler} />);
        // utils.debug();
        const element = screen.getByRole('button');
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
        expect(mockHandler.mock.calls).toHaveLength(1);
        expect(mockHandler).toHaveBeenCalled();
    });

    test('should have a button and execute spy when clicked', () => {
        const myOnClickFunctionObj = {
            clickHandler: () => {
            }
        }
        const somethingSpy = jest.spyOn(myOnClickFunctionObj, 'clickHandler');
        const utils = render(<AppButton buttonLabel='My button' buttonColor='red' onClickFunct={myOnClickFunctionObj.clickHandler} />);
        // utils.debug();
        const element = screen.getByRole('button');
        expect(element).toBeInTheDocument();
        fireEvent.click(element);
        expect(somethingSpy).toBeCalled();
    });
});
