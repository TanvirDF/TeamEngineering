import React from 'react';
import { screen, render } from '@testing-library/react';
import Information from '../component/Information';


describe('Tests for information component', () => {
    it('should render badge data', () => {
        render(<Information />);
        expect(screen.getByText('Badges:')).toBeInTheDocument();
    });
    it('should render scores data', () => {
        render(<Information />);
        expect(screen.getByText('Scores:')).toBeInTheDocument();
    })
})