import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMessages } from "../hooks/useMessages";

type Props = {
  chatUserId: string;
  text: string;
};

export const ChatBox: FC<Props> = ({ chatUserId, text }) => {
  const { useMessagesByIds } = useMessages();
  const messages = useMessagesByIds(chatUserId, text);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {messages &&
          messages.map((message) => (
            <Typography variant="h5" component="div">
              {message.Message}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
};
