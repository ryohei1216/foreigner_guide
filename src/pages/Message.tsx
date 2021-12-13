import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useUsers } from "../hooks/useUsers";
import { useAppSelector } from "../store/hooks";
//components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageCard from "../components/MessageCard";

const theme = createTheme();
export default function Message() {
  const history = useHistory();
  const { useApplyUsers } = useUsers();
  const applyUsers = useApplyUsers();
  const signInInfo = useAppSelector((state) => state.signInInfo);
  console.log(applyUsers);

  useEffect(() => {
    if (!signInInfo.id) {
      history.push("/signIn");
    }
  }, []);
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
            <Grid xs={12} container spacing={1}>
              {applyUsers &&
                applyUsers.map((user) => (
                  <MessageCard user={user} key={user.id} />
                ))}
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
