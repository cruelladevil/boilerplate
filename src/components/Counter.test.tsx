import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import '@testing-library/jest-dom';

describe('Counter 컴포넌트 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('더하기 버튼을 누르면 카운트가 올라간다.', async () => {
    render(<Counter />);

    userEvent.click(await screen.findByText<HTMLInputElement>(`더하기`));

    expect(await screen.findByText(/1/)).toBeInTheDocument();
  });

  test('빼기 버튼을 누르면 카운트가 내려간다.', async () => {
    render(<Counter />);

    userEvent.click(await screen.findByText<HTMLInputElement>(`빼기`));

    expect(await screen.findByText(/-1/)).toBeInTheDocument();
  });
});
