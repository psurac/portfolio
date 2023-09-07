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
        jest.setSystemTime(new Date('07 Sep 2023 10:30:00 UTC'))
    })

    afterAll(() => {
        jest.useRealTimers();
    });

    test('Insert a day and time allready past', () => {
        render(<Reservation />);
        const timeDateElment = screen.getByTestId('datetime-local');
        fireEvent.change(timeDateElment, {target: {value: '06 Sep 2023 10:30:00 UTC'}})
        expect(timeDateElment.value).toBe('');
    });

    test('Insert a day and time in fututre within a week and in working hours', () => {
        render(<Reservation />);
        const timeDateElment = screen.getByTestId('datetime-local');
        fireEvent.change(timeDateElment, {target: {value: '08 Sep 2023 02:30:00 UTC'}});
        expect(timeDateElment.value).toBe('08 Sep 2023 02:30:00 UTC')
    });

    test('Insert a day and time in future with in a week not in working hours', () => {
        render(<Reservation />);
        const timeDateElment = screen.getByTestId('datetime-local');
        fireEvent.change(timeDateElment, {target: {value: '08 Sep 2023 08:30:00 UTC'}});
        fireEvent.click(screen.getAllByRole('button'));
    });
})