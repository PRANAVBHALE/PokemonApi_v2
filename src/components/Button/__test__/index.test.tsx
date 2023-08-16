import Button from '..';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  const styles = {
    btnType: {
      btn: 'w-32	h-16 rounded-none bg-sky-500 hover:bg-sky-800',
    },
  };
  it('should display children', () => {
    render(<Button styles={styles.btnType}>Click Me!</Button>);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Click Me!');
  });

  it('should handle click event', () => {
    const handleOnClick = jest.fn();

    //fake
    const handleOnCl = jest.fn();

    render(
      <Button handleOnClick={handleOnClick} styles={styles.btnType}>
        Click Me!
      </Button>
    );

    const btn = screen.getByRole('button');
    fireEvent.click(btn);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
