import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";

//components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CountriesCard } from "../components/CountriesCard";

const countries = [
  "アメリカ",
  "イギリス",
  "フランス",
  "ロシア",
  "ドイツ",
  "カナダ",
  "中国",
  "イタリア",
  "シンガポール",
];

const theme = createTheme();

const Countries = () => {
  const signInInfo = useAppSelector((state) => state.signInInfo);
  console.log("singInInfo: ", signInInfo);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBarCenter>
        <Toolbar style={{ margin: "0 auto", width: "30%" }}>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h4" color="inherit" noWrap>
            訪れたい国を選ぶ
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {countries.map((country) => (
              <Grid item key={country} xs={12} sm={6} md={4}>
                <CountriesCard country={country} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

const ToolBarCenter = styled.div`
  margin: 0 auto;
`;

export default Countries;
