import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

type ButtonSize = 'M' | 'L' | 'XL';
enum EButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = 'M',
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.button, { [cls.square]: square }, [
        className,
        cls[theme],
        cls[EButtonSize[size]],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
