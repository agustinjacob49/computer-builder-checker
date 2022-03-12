import { render } from '@testing-library/react';
import View from '../../pages/about/about';

describe('Home view', () => {
  test('Snapshot testing', () => {
    const { container } =  render(<View />);
    expect(container).toMatchSnapshot();
  });

});

