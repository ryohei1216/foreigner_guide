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

const menuItems: MenuItem[] = [
  { title: "国を探す", path: "/countries" },
  { title: "ガイドを探す", path: "/guiders" },
  { title: "案内する", path: "/guide" },
  { title: "メッセージ", path: "/message" },
  { title: "マイページ", path: "/mypage" },
];

const theme = createTheme();

const Main = () => {
  const history = useHistory();
  const singInInfoState = useSelector<DefaultRootState, LoginInfo>(
    (state) => state.loginInfo
  );
  console.log(singInInfoState);

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

export default Main;
