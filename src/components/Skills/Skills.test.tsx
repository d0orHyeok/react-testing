import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test('render correctly', () => {
    render(<Skills skills={skills} />);
    const listEl = screen.getByRole('list');
    expect(listEl).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listEls = screen.getAllByRole('listitem');
    expect(listEls).toHaveLength(skills.length);
  });
});
