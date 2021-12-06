import React from "react";
import { useHistory } from "react-router";
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
import { countryItem } from "../../type";

export const countryItems: countryItem[] = [
  { title: "アメリカ", path: "america" },
  { title: "イギリス", path: "britain" },
  { title: "フランス", path: "france" },
  { title: "ロシア", path: "russia" },
  { title: "ドイツ", path: "germany" },
  { title: "カナダ", path: "canada" },
  { title: "中国", path: "china" },
  { title: "イタリア", path: "italia" },
  { title: "シンガポール", path: "singapore" },
];

const theme = createTheme();
const SelectGuideCountry = () => {
  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBarCenter>
        <Toolbar style={{ margin: "0 auto", width: "20%" }}>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h4" color="inherit" noWrap>
            国を選ぶ
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {countryItems.map((item) => (
              <Grid item key={item.path} xs={4} alignItems="center">
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  onClick={() => {
                    history.push(`${item.path}`);
                  }}
                >
                  {item.title}
                </Button>
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

export default SelectGuideCountry;
