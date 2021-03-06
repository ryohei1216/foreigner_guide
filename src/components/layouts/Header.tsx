import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { signIn } from "../../store/features/signInInfo/signInInfoSlice";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { sections, title } = props;
  const history = useHistory();
  const dispatch = useAppDispatch();
  const signInInfo = useAppSelector((state) => state.signInInfo);

  const signOut = () => {
    dispatch(signIn({ email: "", password: "" }));
    history.push("/");
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {!signInInfo.email ? (
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              history.push("/signin");
            }}
          >
            Sign In
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Button>
        )}

        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            history.push("/signup");
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

// export default Header;
