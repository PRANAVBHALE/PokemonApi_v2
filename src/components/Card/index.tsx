import React from 'react';
import { ICard } from './types';

const Card = ({ styles, children }: ICard) => {
  const { card } = styles;

  return (
    <>
      <div className={card}>{children}</div>
    </>
  );
};

export default Card;
