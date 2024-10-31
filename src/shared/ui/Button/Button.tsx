import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size = 'M', disabled, ...otherProps } = props;

  return (
    <button
      type="button"
      className={classNames(cls.button, { [cls.square]: square, [cls.disabled]: disabled }, [
        className,
        cls[theme],
        cls[EButtonSize[size]],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
