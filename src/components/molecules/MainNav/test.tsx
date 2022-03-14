import { render } from '@testing-library/react';

import MainNav from '.';
import ThemeWrapper from '../../../utils/test-theme-wrapper';

describe('MainNav', () => {
  it('should render', () => {
    const { baseElement } = render(<ThemeWrapper TestedComponent={MainNav} />);

    expect(baseElement).toMatchSnapshot();
  });
});
