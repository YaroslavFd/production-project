import { memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
}

export const LoginForm = memo(({ className, isOpen = false }: LoginFormProps) => {
  const { t } = useTranslation();
  const inputUsername = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  useEffect(() => {
    if (isOpen) {
      inputUsername.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text
          text={t('Вы ввели неверный логин или пароль')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        ref={inputUsername}
        className={cls.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
