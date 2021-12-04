import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { DefaultRootState, LoginInfo } from "../utils/store/type";
//components
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
//type
import { MenuItem } from "../../type";

export const menuItems: MenuItem[] = [
  { title: "行きたい国を探す", path: "/countries" },
  { title: "ガイドを探す", path: "/search_guides" },
  { title: "案内する", path: "/guides" },
  { title: "メッセージ", path: "/message" },
  { title: "マイページ", path: "/mypage" },
];

const theme = createTheme();

const Main = () => {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBarCenter>
        <Toolbar style={{ margin: "0 auto", width: "40%" }}>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h4" color="inherit" noWrap>
            Foreigner Guide へようこそ
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {menuItems.map((item) => (
              <Grid item key={item.title} xs={4} alignItems="center">
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

export default Main;
