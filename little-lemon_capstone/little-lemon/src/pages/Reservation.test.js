import { render, screen, fireEvent } from '@testing-library/react';
import Reservation from './Reservation';

test('Renders the Reservation heading', () => {
    render(<Reservation />);
    const headingElement = screen.getByText('Reserve a Table');
    expect(headingElement).toBeInTheDocument();
});

describe('Set time false', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2023-07-08T10:30'))
    })

    afterAll(() => {
        jest.useRealTimers();
    });

    test('Insert a day and time allready past', () => {
        render(<Reservation />);
        const timeDateElment = screen.getByTestId('datetime-local');
        expect(timeDateElment).toBeInTheDocument();
    });

    test('Insert a day and time in fututre within a week and in working hours', () => {
        render(<Reservation />);
        const timeDateElment = screen.getByTestId('datetime-local');
        fireEvent.change(timeDateElment, {target: {value: '2023-09-08T02:30'}});
        expect(timeDateElment.value).toBe('2023-09-08T02:30')
    });

    test('Insert a day and time in future with in a week not in working hours', () => {
        render(<Reservation />);
        const timeDateElment = screen.getByTestId('datetime-local');
        fireEvent.change(timeDateElment, {target: {value: '2023-09-08T08:30'}});
        fireEvent.click(screen.getByText('Reserve'));
        expect(screen.getAllByText(/Opening hours from 1pm to 11pm/i)[1]).toBeInTheDocument();
    });
})