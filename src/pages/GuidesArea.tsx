import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { GuideCard } from "../components/GuideCard";
import { useUsers } from "../hooks/useUsers";

const theme = createTheme();
const GuidesArea = () => {
  const { area } = useParams<{ area: string }>();
  const { useUsersByArea } = useUsers();
  const users = useUsersByArea(area);
  console.log(users);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBarCenter>
        <Toolbar style={{ margin: "0 auto", width: "40%" }}>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h4" color="inherit" noWrap data-testid="title">
            {area}のガイド一覧
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {users.map((user) => (
              <Grid
                item
                key={user.id}
                xs={12}
                sm={6}
                md={4}
                data-testid="guide_card_grid"
              >
                <GuideCard area={area} user={user} />
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

export default GuidesArea;
