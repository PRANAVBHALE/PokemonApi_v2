import { render, screen, waitFor } from '@testing-library/react';
import RootLayout from '../layout';

describe('layout', () => {
  it('should render children', async () => {
    const children = <div>Hello I'm children</div>;
    render(<RootLayout>{children}</RootLayout>);

    await waitFor(() => {
      const el = screen.getByText(`Hello I'm children`);
      expect(el).toBeInTheDocument();
    });
  });
});
