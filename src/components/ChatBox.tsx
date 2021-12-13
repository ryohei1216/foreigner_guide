import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useUsers } from "../hooks/useUsers";
import { useMessages } from "../hooks/useMessages";
import { useAppSelector } from "../store/hooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  chatUserId: string;
  text: string;
};

export const ChatBox: FC<Props> = ({ chatUserId, text }) => {
  const signInInfo = useAppSelector((state) => state.signInInfo);
  const { useMessagesByIds } = useMessages();
  const messages = useMessagesByIds(chatUserId, text);
  const { useUserById } = useUsers();
  const chatUser = useUserById(chatUserId);
  const user = useUserById(signInInfo.id);
  console.log(chatUser);
  console.log(user);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ backgroundColor: "rgb(67 79 227 / 17%)" }}>
        {messages &&
          messages.map((message) => (
            <div
              style={{
                display: "flex",
                margin: "20px 0",
              }}
            >
              <AccountCircleIcon sx={{ fontSize: "30px" }} />
              <p
                style={{
                  margin: 0,
                  padding: "5px",
                  fontSize: "20px",
                  overflowWrap: "anywhere",
                  backgroundColor: "white",
                  borderRadius: "14px",
                }}
              >
                {message.Message}
              </p>
            </div>
          ))}
      </CardContent>
    </Card>
  );
};
