import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

test(`Footer matches snapshot`, () => {
    // render(<Footer />)
    // const copyright = screen.getByText(/copyright/i)
    // expect(copyright).toMatch('Copyright')
    expect(render(<Footer />)).toMatchSnapshot();

});