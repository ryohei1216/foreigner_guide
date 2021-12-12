import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
//components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const theme = createTheme();
export default function Message() {
  const history = useHistory();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToolBarCenter>
          <Toolbar style={{ margin: "0 auto", width: "20%" }}>
            <Typography variant="h4" color="inherit" noWrap>
              メッセージ
            </Typography>
          </Toolbar>
        </ToolBarCenter>
        <div>
          <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={1}>
              <Grid item key="area" xs={12} alignItems="center">
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  onClick={() => {
                    history.push("/guides_area");
                  }}
                >
                  エリアで探す
                </Button>
              </Grid>
              <Grid item key="country" xs={12} alignItems="center">
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  onClick={() => {
                    history.push("/guides_country");
                  }}
                >
                  国で探す
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
}

const ToolBarCenter = styled.div`
  margin: 0 auto;
`;
