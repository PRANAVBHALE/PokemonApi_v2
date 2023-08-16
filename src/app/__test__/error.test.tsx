import { render, screen } from '@testing-library/react';
import Error from '../error';

describe('loading component', () => {
  xit('should display loading text', () => {
    const error = { message: 'Error' };

    render(<Error error={error} />);
    const errorTxt = screen.getByText('Something went wrong! Error');
    expect(errorTxt).toBeInTheDocument();
  });
});
