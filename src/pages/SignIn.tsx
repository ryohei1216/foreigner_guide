import * as React from "react";
import { useHistory } from "react-router-dom";
import { getDomain } from "../utils/config";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { signIn } from "../store/features/signInInfo/signInInfoSlice";

//conponents
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const theme = createTheme();

export default function SignIn() {
  // const domain = getDomain();
  const history = useHistory();

  const signInInfo = useAppSelector((state) => state.signInInfo);
  console.log(signInInfo);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_data = {
      email: data.get("email"),
      password: data.get("password"),
    };

    axios.post(`http://${getDomain()}/signin`, user_data).then((res) => {
      console.log(res);

      if (res.status === 200) {
        dispatch(
          signIn({
            email: res.data.getUser.email,
            password: res.data.getUser.password,
          })
        );
        // type: "SAVE_SIGNIN_INFO",

        history.push("/");
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className="input_email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className="input_password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className="signin_button"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
