import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation();
  const [isError, setIsError] = useState(false);

  const throwErrorClick = () => setIsError(true);

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  return <Button onClick={throwErrorClick}>{t('Throw error')}</Button>;
};
