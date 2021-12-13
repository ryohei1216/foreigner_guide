import React, { useState } from "react";
import { useHistory } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { getApiDomain } from "../utils/config";
//components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { SelectTextFields } from "../components/common/SelectTextFields";

const countries = [
  {
    value: "アメリカ",
    label: "アメリカ",
  },
  {
    value: "フランス",
    label: "フランス",
  },
];
const areas = [
  {
    value: "北アメリカ",
    label: "北アメリカ",
  },
  {
    value: "ヨーロッパ",
    label: "ヨーロッパ",
  },
];
const theme = createTheme();
const SignUp = () => {
  const history = useHistory();
  const apiDomain = getApiDomain();
  const [fileName, setFileName] = useState<string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const user_data = {
      firstName: data.get("firstName")!,
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      country: data.get("country"),
      area: data.get("area"),
      // image: fileName,
    };
    axios
      .post(`${apiDomain}/signUp`, user_data)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0];
  //     setFileName(file.name);
  //     postFile(e.target.files[0]);
  //   }
  // };

  // const postFile = async (image: File) => {
  //   const url = `${apiDomain}/uploadImage`;
  //   const data = new FormData();
  //   data.append("image", image);
  //   const headers = { "content-type": "multipart/form-data" };
  //   const res = await axios.post(url, data, { headers });
  //   console.log(res);
  //   console.log(JSON.parse(res.data));
  // };

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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  aria-required="true"
                  autoFocus
                  data-testid="firstName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  aria-required="true"
                  autoComplete="family-name"
                  data-testid="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  aria-required="true"
                  autoComplete="email"
                  data-testid="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  aria-required="true"
                  autoComplete="new-password"
                  data-testid="password"
                />
              </Grid>
              <Grid item xs={12}>
                <SelectTextFields
                  defaultValueLabel="アメリカ"
                  selectOptions={countries}
                  textFieldId="country"
                />
                <SelectTextFields
                  defaultValueLabel="北アメリカ"
                  selectOptions={areas}
                  textFieldId="area"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <Typography>Select Profile Image</Typography>
                <input type="file" onChange={onFileInputChange} />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
