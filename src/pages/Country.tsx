import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import axios from "axios";
import { getDomain } from "../utils/config";
import { CountriesInterface } from "../../type";
//components
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CountryCard } from "../components/CountryCard";

const theme = createTheme();

const Country = () => {
  const domain = getDomain();
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<CountriesInterface>();

  useEffect(() => {
    axios.get(`https://${domain}/country?q=${id}`).then((res) => {
      console.log(res);
      setCountry(res.data.countries);
    });
  }, [domain, id]);

  console.log(country?.value);

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
          >
            {id}
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {country?.value.map((data) => (
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
