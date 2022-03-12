/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, screen, act } from '@testing-library/react';
import View from './../../pages/home/view.js';

describe('Home view', () => {
  test('Snapshot testing', () => {
    const { container } =  render(<View />);
    expect(container).toMatchSnapshot();
  });


  test('Click on render button when input is empty should show errorMessage', () => {
    render(<View />);
    const button = screen.getByTestId('button-render');

    fireEvent.click(button);

    screen.getByText('Please, enter some text', { exact: false });
  });

  test('Click on clean should clean text area', () => {
    render(<View />);
    const textarea = screen.getByRole("textbox");
    fireEvent.input(textarea, { target: { value: "A DEPENDS B C" } });

    expect(textarea.value).toBe("A DEPENDS B C");

    const buttonClean = screen.getByTestId('button-clean');
    fireEvent.click(buttonClean);
    
    expect(textarea.value).toBe("");
  });

  jest.setTimeout(10000);
  test('Enter circular reference', async () => {
    render(<View />);
    const button = screen.getByTestId('button-render');

    const textarea = screen.getByRole("textbox");

    act(() => {
      fireEvent.input(textarea, { target: { value: "A DEPENDS B C\nC DEPENDS X\nX DEPENDS A" } });
    });

    act(() => {
      fireEvent.click(button);
    })

    await screen.findByText('Circular reference', { exact: false });
   
  });

  jest.setTimeout(15000);
  test('Enter text should render a graph', async () => {
    render(<View />);
    const button = screen.getByTestId('button-render');

    const textarea = screen.getByRole("textbox");

    act(() => {
      fireEvent.input(textarea, { target: { value: "A DEPENDS B C\nC DEPENDS X" } });
    });

    act(() => {
      fireEvent.click(button);
    })

    await screen.findAllByTestId("vertex");
  });

});

