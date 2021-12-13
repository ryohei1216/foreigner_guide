import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
//types
import { User } from "../../types";
//components
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  user: User;
};

const MessageCard: FC<Props> = ({ user }) => {
  const history = useHistory();
  const signInInfo = useAppSelector((state) => state.signInInfo);
  return (
    <Grid item key={user.id} xs={12} alignItems="center">
      <Card
        sx={{ minWidth: 275 }}
        onClick={() => {
          history.push(`/chatroom/${user.id}`);
        }}
        style={{ cursor: "pointer", display: "flex" }}
      >
        <AccountCircleIcon
          sx={{ fontSize: "80px" }}
          style={{ marginTop: "10px" }}
        />
        <CardContent>
          <Typography style={{ fontSize: "20px" }} component="div">
            {user.lastName} {user.firstName}
          </Typography>
          <Typography variant="body1">
            {user.area} - {user.country}
          </Typography>
          <Typography variant="body2">新しい申請が届いています</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MessageCard;
