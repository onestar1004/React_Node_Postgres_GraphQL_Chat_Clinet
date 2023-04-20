import { Link as RouterLink, useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { useAuthContext } from "../context/auth";
import { useStateContext } from "../context/state";
import UserButtonsDesktop from "./UserButtonsDesktop";
import UserMenuMobile from "./UserMenuMobile";
import ChatIcon from "../svg/chat.svg";

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import { useNavStyles } from "../styles/muiStyles";
import { useTheme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const NavBar = () => {
  const { user, logoutUser } = useAuthContext();
  const { selectedChat } = useStateContext();
  const client = useApolloClient();
  const history = useHistory();
  const classes = useNavStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogout = () => {
    client.clearStore();
    logoutUser();
    history.push("/login");
  };

  if (isMobile && selectedChat) return null;

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar variant="dense" disableGutters={isMobile}>
        <Container style={{ display: "flex" }} disableGutters={isMobile}>
          <div className={classes.leftPortion}>
            <div className={classes.logoWrapper}>
              <Button
                className={classes.logoBtn}
                component={RouterLink}
                to="/"
                color="primary"
              >
                <img
                  src={ChatIcon}
                  alt="testchat-logo"
                  className={classes.svgImage}
                />
                TestChat!
              </Button>
              {!isMobile && (
                <Typography variant="caption" color="secondary">
                  Made by{" "}
                  <FavoriteIcon style={{ fontSize: 10, color: "#2ec4b6" }} />
                  <Link
                    href={"https://github.com/onestar1004"}
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                  >
                    <strong>{`OneStar`}</strong>
                  </Link>
                </Typography>
              )}
            </div>
          </div>
          <UserButtonsDesktop
            user={user}
            handleLogout={handleLogout}
            isMobile={isMobile}
          />
          <UserMenuMobile
            user={user}
            handleLogout={handleLogout}
            isMobile={isMobile}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
