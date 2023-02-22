// App.test.js
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

describe('App', () => {
  it('renders the welcome message with the user name', () => {
    render(<App />);
    expect(screen.getByText(/Wri anything your mind is up to/i)).toBeInTheDocument();
  });
});
