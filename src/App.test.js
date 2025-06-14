import { render, screen } from '@testing-library/react';
import App from './App'; // ✅ must match export in App.js

test('renders hanan app text', () => {
  render(<App />);
  const heading = screen.getByText(/here is the hanan app/i);
  expect(heading).toBeInTheDocument();
});
