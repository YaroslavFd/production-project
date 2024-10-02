import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
