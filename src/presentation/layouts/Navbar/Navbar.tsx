import { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routes';
import { useIntl } from 'react-intl';
import { useAppDispatch, useAppSelector } from '@application/store';
import { Grid } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { resetProfile } from '@application/state-slices';
import { useAppRouter } from '@infrastructure/hooks/useAppRouter';
import { NavbarLanguageSelector } from '@presentation/components/ui/NavbarLanguageSelector/NavbarLanguageSelector';
import { useOwnUserHasRole } from '@infrastructure/hooks/useOwnUser';
import { UserRoleEnum } from '@infrastructure/apis/client';

/**
 * This is the navigation menu that will stay at the top of the page.
 */
export const Navbar = () => {
  const { formatMessage } = useIntl();
  const { loggedIn } = useAppSelector(x => x.profileReducer);
  const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
  const isClient = useOwnUserHasRole(UserRoleEnum.Client);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { redirectToHome } = useAppRouter();
  const logout = useCallback(() => {
    dispatch(resetProfile());
    redirectToHome();
  }, [queryClient, dispatch, redirectToHome]);

  return <Box sx={{ flexGrow: 1 }}>
    <AppBar>
      <Toolbar>
        <Grid
          container
          item
          direction="row"
          xs={12}
          alignItems="center"
          wrap="nowrap"
          columnSpacing={2}
        >
          <Grid container item direction="column" xs={1}>
            <Link
              to={AppRoute.Index}>
              <HomeIcon style={{ color: 'white' }} fontSize='large' />
            </Link>
          </Grid>
            <Grid container item direction="column" xs={10}>
              {isAdmin && <Grid
                container
                item
                direction="row"
                xs={12}
                alignItems="center"
                wrap="nowrap"
                columnSpacing={15}
              >
                <Grid container item direction="column" xs={1}>
                  <Button color="inherit">
                    <Link style={{ color: 'white' }} to={AppRoute.Users}>
                      {formatMessage({ id: "globals.users" })}
                    </Link>
                  </Button>
                </Grid>
                <Grid container item direction="column" xs={1}>
                  <Button color="inherit">
                    <Link style={{ color: 'white' }} to={AppRoute.UserFiles}>
                      {formatMessage({ id: "globals.files" })}
                    </Link>
                  </Button>
                </Grid>
              </Grid>}
          </Grid>

          <Grid container item direction="column" xs={10}>
              {loggedIn && <Grid
                container
                item
                direction="row"
                xs={12}
                alignItems="center"
                wrap="nowrap"
                columnSpacing={10}
              >
                <Grid container item direction="column" xs={1}>
                  {loggedIn && <Button color="inherit"> 
                    <Link style={{ color: 'white' }} to={AppRoute.Cars}>
                      {formatMessage({ id: "globals.cars" })}
                    </Link>
                  </Button>}
                </Grid>

                <Grid container item direction="column" xs={1}>
                  {loggedIn && !isClient && <Button color="inherit"> 
                    <Link style={{ color: 'white' }} to={AppRoute.PublishCar}>
                      {formatMessage({ id: "globals.publishCar" })}
                    </Link>
                  </Button>}
                </Grid>
              </Grid>}
          </Grid>

          <Grid container item direction="column" xs={1}>
            <NavbarLanguageSelector />
          </Grid>

          <Grid container item direction="column" xs={1}>
            {loggedIn && <Button color="inherit"> 
              <Link style={{ color: 'white' }} to={AppRoute.Account}>
                {formatMessage({ id: "globals.account" })}
              </Link>
            </Button>}
          </Grid>
          
          <Grid container item direction="column" xs={1}>
            {!loggedIn && <Button color="inherit">  {/* If the user is not logged in show a button that redirects to the login page. */}
              <Link style={{ color: 'white' }} to={AppRoute.Login}>
                {formatMessage({ id: "globals.login" })}
              </Link>
            </Button>}
            {loggedIn && <Button onClick={logout} color="inherit" >
              {formatMessage({ id: "globals.logout" })}
            </Button>}
          </Grid>

          <Grid>
            {!loggedIn && <Button color="inherit">
              <Link style={{ color: 'white' }} to={AppRoute.Register}>
                {formatMessage({ id: "globals.register" })}
              </Link>
            </Button>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Box>
}