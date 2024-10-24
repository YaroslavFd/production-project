import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, className, children, theme, ...otherProps } = props;

  return (
    <button
      onClick={onClick}
      className={classNames(cls.button, {}, [className, cls[theme]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
