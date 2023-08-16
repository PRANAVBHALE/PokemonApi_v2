import { render, screen } from '@testing-library/react';
import Card from '..';

describe('Card component', () => {
  it('should display children', () => {
    const styles = {
      card: 'p-4 m-4 shadow-sky-500 border border-sky-500',
    };
    render(
      <Card styles={styles}>
        <h1>Hello World</h1>
      </Card>
    );

    const el = screen.getByRole('heading', { level: 1 });
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent('Hello World');
  });
});
