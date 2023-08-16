export interface IButton {
  children: React.ReactNode;
  handleOnClick?: () => void;
  styles: {
    btn: string;
  };
}
