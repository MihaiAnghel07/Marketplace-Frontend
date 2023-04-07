import { UserRoleEnum } from "@infrastructure/apis/client";
import { useOwnUserHasRole } from "@infrastructure/hooks/useOwnUser";
import { AppIntlProvider } from "@presentation/components/ui/AppIntlProvider";
import { ToastNotifier } from "@presentation/components/ui/ToastNotifier";
import { CarsPage } from "@presentation/pages/CarsPage";
import { HomePage } from "@presentation/pages/HomePage";
import { LoginPage } from "@presentation/pages/LoginPage";
import { RegisterPage } from "@presentation/pages/RegisterPage";
import { UserFilesPage } from "@presentation/pages/UserFilesPage";
import { UsersPage } from "@presentation/pages/UsersPage";
import { Route, Routes, Navigate } from "react-router-dom"
import { AppRoute } from "routes";
import { useAppSelector } from '@application/store';
import { PublishCarPage } from "@presentation/pages/PublishCarPage";
import { AccountPage } from "@presentation/pages/AccountPage";

export function App() {
  const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
  const { loggedIn } = useAppSelector(x => x.profileReducer);

  return <AppIntlProvider> {/* AppIntlProvider provides the functions to search the text after the provides string ids. */}
      <ToastNotifier />
      {/* This adds the routes and route mappings on the various components. */}
      <Routes>
        <Route path={AppRoute.Index} element={<HomePage />} /> {/* Add a new route with a element as the page. */}
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Register} element={<RegisterPage />} />
        {loggedIn && <Route path={AppRoute.Cars} element={<CarsPage />} />}
        {!loggedIn && <Route path={AppRoute.Cars} element={<Navigate to={AppRoute.Login} />} />}
        {loggedIn && <Route path={AppRoute.PublishCar} element={<PublishCarPage />} />}
        {!loggedIn && <Route path={AppRoute.PublishCar} element={<Navigate to={AppRoute.Login} />} />}
        {loggedIn && <Route path={AppRoute.Account} element={<AccountPage />} />}
        {!loggedIn && <Route path={AppRoute.Account} element={<Navigate to={AppRoute.Login} />} />}
        {isAdmin && <Route path={AppRoute.Users} element={<UsersPage />} />} {/* If the user doesn't have the right role this route shouldn't be used. */}
        {isAdmin && <Route path={AppRoute.UserFiles} element={<UserFilesPage />} />}
      </Routes>
    </AppIntlProvider>
}
