'use client';
import Image from 'next/image';
import { IAvatar } from './types';

export function Avatar({ styles, handleOnClick, img }: IAvatar) {
  return (
    <div
      data-testid="avatar-wrapper"
      className={styles.avatarWrapper}
      onClick={handleOnClick}
    >
      <Image
        width={500}
        height={500}
        data-testid="avatar-img"
        src={img}
        alt="avatar"
        className={styles.avatar}
      />
    </div>
  );
}
