import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app layout', () => {
  render(<App />);

  expect(screen.getByTestId('app-layout')).toBeInTheDocument();
});
