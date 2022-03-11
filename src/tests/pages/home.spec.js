import { render, screen } from '@testing-library/react';
import View from './../../pages/home/view.js';

describe('Home view', () => {
  test('Snapshot testing', () => {
    const { container } =  render(<View />);
    expect(container).toMatchSnapshot();
  });

});

