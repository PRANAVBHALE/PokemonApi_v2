import { StaticImageData } from 'next/image';

export interface IAvatar {
  img: string | StaticImageData;
  handleOnClick?: () => void;
  styles: {
    avatar: string;
    avatarWrapper: string;
  };
}
