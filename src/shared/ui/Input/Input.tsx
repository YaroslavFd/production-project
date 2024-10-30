import React, { forwardRef, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

/* eslint-disable react/no-unused-prop-types */
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
      className,
      value,
      onChange,
      autoFocus,
      placeholder,
      type = 'text',
      ...otherProps
    } = props;

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <div className={classNames(cls.inputWrapper, {}, [className])}>
        <input
          className={cls.input}
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeInput}
          placeholder={`${placeholder}...`}
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus={autoFocus}
          {...otherProps}
        />
      </div>
    );
  }),
);
