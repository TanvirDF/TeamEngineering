import { getByText, render, screen } from '@testing-library/react';
import Training from '../Components/HomePage/Training';
import TrainingStory from '../Components/HomePage/TrainingStory';

test(`Training component renders TrainingStory component`, () => {

    render(<Training />)
    expect(screen.getByTestId('trainingstory')).toBeInTheDocument()
})