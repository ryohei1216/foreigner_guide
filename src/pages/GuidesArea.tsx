import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import { getApiDomain } from "../utils/config";
import axios from "axios";

//components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { GuideCard } from "../components/GuideCard";
import { User } from "../../type";

const theme = createTheme();
const GuidesArea = () => {
  const apiDomain = getApiDomain();
  const { area } = useParams<{ area: string }>();
  const [users, setUsers] = useState<User[]>();

  const getUsersByArea = async () => {
    const res = await axios.get(`${apiDomain}/users_area?area=${area}`);
    return res;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersByArea();
      console.log(users);
    };
    fetchUsers();
  });

  let areaName;
  switch (area) {
    case "europe":
      areaName = "ヨーロッパ";
      break;
    case "north_america":
      areaName = "北アメリカ";
      break;
    case "asia":
      areaName = "アジア";
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBarCenter>
        <Toolbar style={{ margin: "0 auto", width: "40%" }}>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h4" color="inherit" noWrap>
            {areaName}のガイド一覧
          </Typography>
        </Toolbar>
      </ToolBarCenter>
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {/* {guides.map((guide) => (
              <Grid item key={country} xs={12} sm={6} md={4}>
                <GuidesCard country={country} />
              </Grid>
            ))} */}
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
