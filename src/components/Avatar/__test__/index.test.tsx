import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar } from '..';
import emptyball from '../../../../public/emptyball.png';

describe('Avatar', () => {
  const styles = {
    avatarWrapper: 'h-6 w-6 relative top-6',
    avatar: 'absolute inline-block h-6 w-6 rounded-full ring-2 ring-white',
  };

  it('should display have wrapper and image', () => {
    render(<Avatar img={emptyball} styles={styles} />);

    const avatarWrapper = screen.getByTestId('avatar-wrapper');
    const avatarImg = screen.getByTestId('avatar-img');

    expect(avatarWrapper).toBeInTheDocument();
    expect(avatarImg).toBeInTheDocument();
  });

  it('should handle click event', () => {
    const handleOnClick = jest.fn();

    //fake
    const handleOnCl = jest.fn();

    render(
      <Avatar img={emptyball} styles={styles} handleOnClick={handleOnClick} />
    );

    const el = screen.getByTestId('avatar-wrapper');
    fireEvent.click(el);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
