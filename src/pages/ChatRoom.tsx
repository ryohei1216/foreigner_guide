import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { getApiDomain } from "../utils/config";
//components
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ChatBox } from "../components/ChatBox";
import axios from "axios";

const theme = createTheme();
const ChatRoom = () => {
  const signInInfo = useAppSelector((state) => state.signInInfo);
  const apiDomain = getApiDomain();
  const [text, setText] = useState("");
  const { id } = useParams<{ id: string }>();

  const handleSubmit = async () => {
    const messageData = {
      signInInfoId: signInInfo.id,
      userId: id,
      message: text,
    };
    axios
      .post(`${apiDomain}/saveMessages`, messageData)
      .then((res) => {
        console.log(res);
        setText("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBarCenter>
        <Toolbar style={{ margin: "0 auto", width: "18%" }}>
          <Typography variant="h4" color="inherit" noWrap>
            Chat Room
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} style={{ margin: "0 80px" }}>
              <ChatBox chatUserId={id} text={text} />
              <br />
              <TextField
                style={{ width: "90%" }}
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <Button
                variant="outlined"
                style={{ marginTop: "9px", marginLeft: "10px" }}
                onClick={handleSubmit}
              >
                送信
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

const ToolBarCenter = styled.div`
  margin: 0 auto;
`;

export default ChatRoom;
