import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
}

export const LoginForm = ({ className, isOpen = false }: LoginFormProps) => {
  const { t } = useTranslation();

  const inputUsername = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputUsername.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        ref={inputUsername}
        className={cls.input}
        placeholder={t('Введите username')}
      />
      <Input
        className={cls.input}
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
