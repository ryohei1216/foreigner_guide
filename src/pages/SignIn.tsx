import React from "react";
import { useHistory } from "react-router-dom";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppSelector, useAppDispatch } from "../store/hooks";

//components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { signIn } from "../store/features/signInInfo/signInInfoSlice";

const theme = createTheme();

export default function SignIn() {
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

    axios
      .post(`${getApiDomain()}/signIn`, user_data)
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            signIn({
              id: res.data.getUser.id,
              email: res.data.getUser.email,
              password: res.data.getUser.password,
            })
          );
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
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
              data-testid="input_email"
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
              data-testid="input_password"
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
