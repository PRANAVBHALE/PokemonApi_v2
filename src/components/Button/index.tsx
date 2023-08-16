import React from 'react';
import { IButton } from './types';

const Button = (props: IButton) => {
  const { children, styles, handleOnClick } = props;

  return (
    <div>
      <button onClick={handleOnClick} className={styles.btn}>
        {children}
      </button>
    </div>
  );
};

export default Button;

//className="py-4 px-16 rounded-none bg-sky-500"
