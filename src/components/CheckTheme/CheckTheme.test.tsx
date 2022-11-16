// import { render, screen } from '@testing-library/react';
import { render, screen } from '../../test-uitls';
import { AppContext } from '../../providers/AppProvider';
import CheckTheme from './CheckTheme';

describe('CheckTheme', () => {
  // 해당 테스트는 context (provider) 가 제공되지 않으므로 오류를 발생시킨다
  //   test('renders text correctly', () => {
  //     render(<CheckTheme />);
  //     const headingEl = screen.getByRole('heading');
  //     expect(headingEl).toHaveTextContent('dark mode');
  //   });

  // 해당 테스트는 직접 Provider를 넣어서 렌더링시켜서 작업
  const AppProviderProps = {
    theme: 'light',
    setTheme: function (arg: string) {},
  };
  test('renders text correctly', () => {
    render(
      <AppContext.Provider value={AppProviderProps}>
        <CheckTheme />
      </AppContext.Provider>
    );
    const headingEl = screen.getByRole('heading');
    expect(headingEl).toHaveTextContent('light mode');
  });

  //   Custom render 사용
  test('renders text correctly, using custom render', () => {
    render(<CheckTheme />);
    const headingEl = screen.getByRole('heading');
    expect(headingEl).toHaveTextContent('light mode');
  });
});
