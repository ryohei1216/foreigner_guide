import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import axios from "axios";
import { getApiDomain } from "../utils/config";
import { CountriesInterface } from "../../types";
//components
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CountryCard } from "../components/CountryCard";

const theme = createTheme();

const Country = () => {
  const apiDomain = getApiDomain();
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<CountriesInterface>();
  console.log(id);

  useEffect(() => {
    axios.get(`${apiDomain}/country?q=${id}`).then((res) => {
      // console.log(res);
      setCountry(res.data.countries);
    });
  }, [id, apiDomain]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBarCenter>
        <Toolbar>
          <Typography
            variant="h4"
            color="inherit"
            noWrap
            width="100%"
            align="center"
            data-testid="id"
          >
            {id}
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {country &&
              country.value.map((data) => (
                <Grid item key={country.webSearchUrl} xs={12} sm={6} md={4}>
                  <CountryCard
                    webUrl={data.webSearchUrl}
                    imageUrl={data.contentUrl}
                    title={data.name}
                  />
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

export default Country;
