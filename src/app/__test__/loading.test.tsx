import { render, screen } from '@testing-library/react';
import Loading from '../loading';

describe('loading component', () => {
  it('should display loading text', () => {
    render(<Loading />);
    const loadingTxt = screen.getByText('Loading your data... Please wait!!!');
    expect(loadingTxt).toBeInTheDocument();
  });
});
