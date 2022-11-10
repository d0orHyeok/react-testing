/**
 * Greet
 * hello 문자가 보이고 name props 가 주어지면 함께 보여진다
 */

import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  test('render correctly', () => {
    render(<Greet />);
    const textEl = screen.getByText(/hello/i);
    expect(textEl).toBeInTheDocument();
  });

  describe('Nested', () => {
    test('renders with a name', () => {
      render(<Greet name="Hyeok" />);
      const textEl = screen.getByText(/hello hyeok/i);
      expect(textEl).toBeInTheDocument();
    });
  });
});
