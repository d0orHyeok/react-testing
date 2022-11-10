import { render, screen } from '@testing-library/react';
import Application from './Application';

/**
 * getByRole 최우선 탐색
 * Option
 * -name: text 또는 라벨을 탐색
 * -level: h1, h2 에서 숫자
 *
 * 우선순위
 * getByRole, getByLabelText, getByPlaceholderText, getByText, getByDisplayValue, getByAltText, getByTitle, getByTestId
 */

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphEl = screen.getByText('All fields are mandatory');
    expect(paragraphEl).toBeInTheDocument();

    const imageEl = screen.getByAltText('a person with a laptop');
    expect(imageEl).toBeInTheDocument();

    const closeEl = screen.getByTitle('close');
    expect(closeEl).toBeInTheDocument();

    const customEl = screen.getByTestId('custom-element');
    expect(customEl).toBeInTheDocument();

    const nameEl = screen.getByRole('textbox', { name: 'Name' });
    expect(nameEl).toBeInTheDocument();
    // const nameEl2 = screen.getByLabelText('Name', { selector: 'input' });
    // expect(nameEl2).toBeInTheDocument();
    // const nameEl3 = screen.getByPlaceholderText('Fullname');
    // expect(nameEl3).toBeInTheDocument();
    // const nameEl4 = screen.getByDisplayValue('Hyeok');
    // expect(nameEl4).toBeInTheDocument();

    const bioEl = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole('combobox');
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole('checkbox');
    expect(termsEl).toBeInTheDocument();
    // const termsEl2 = screen.getByLabelText('I agree to the terms and conditions');
    // expect(termsEl2).toBeInTheDocument();

    const submitButtonEl = screen.getByRole('button');
    expect(submitButtonEl).toBeInTheDocument();
  });
});
