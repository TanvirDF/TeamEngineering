import { getByText, render, screen } from '@testing-library/react';
import Profile from '../component/Profile';
import Story from '../component/Story';

test(`Profile component renders story component`, () => {

    render(<Profile />)
    expect(screen.getByTestId('story')).toBeInTheDocument()
})

