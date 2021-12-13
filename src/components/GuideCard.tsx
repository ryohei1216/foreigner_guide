import React, { FC } from "react";
import { useAppSelector } from "../store/hooks";
import { getApiDomain } from "../utils/config";
//types
import { User } from "../../types";
import { SignInInfo } from "../../types";

//components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "@aws-amplify/storage/node_modules/axios";

type Props = {
  area: string;
  user: User;
};
export const GuideCard: FC<Props> = ({ area, user }) => {
  const signInInfo = useAppSelector((state) => state.signInInfo);
  const apiDomain = getApiDomain();

  const applyMatch = (guideId: string, userInfo: SignInInfo) => {
    axios
      .post(`${apiDomain}/applyMatch`, {
        userId: userInfo.id,
        guideId: guideId,
        status: "apply",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <AccountCircleIcon sx={{ fontSize: 156 }} />
        </div>
        <Typography
          variant="h5"
          color="text.secondary"
          style={{ textAlign: "center" }}
        >
          {user.lastName} {user.firstName}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          style={{ textAlign: "center" }}
        >
          Country : {user.country}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          style={{ textAlign: "center" }}
        >
          Area : {user.area}
        </Typography>
      </CardContent>
      <CardActions style={{ width: "30%", margin: "0 auto" }}>
        <Button
          size="large"
          onClick={() => {
            applyMatch(user.id, signInInfo);
          }}
        >
          申請する
        </Button>
      </CardActions>
    </Card>
  );
};
