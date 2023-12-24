import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import MainNavigation from '../src/navigation';

describe('MainNavigation', () => {
  it('renders correctly', () => {
    const {getByText} = render(<MainNavigation />);
    
    // You can add more specific assertions based on your MainNavigation component.
    expect(getByText('Your Navigation Title')).toBeTruthy();
  });
});
