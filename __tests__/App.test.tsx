import '@testing-library/jest-native';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../src/App';

// Mocking react-redux Provider
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('App', () => {
  it('renders MainNavigation inside Provider and ErrorBoundary', async () => {
    // Render the App component
    const { getByTestId } = render(<App />);

    // Wait for any asynchronous operations to complete
    await waitFor(() => {});

    // Check if MainNavigation is rendered inside Provider and ErrorBoundary
    expect(getByTestId('main-navigation')).toBeTruthy();
  });
});
