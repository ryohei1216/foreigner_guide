import { useEffect } from "react";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { useStateSafe } from "../hooks/useStateSafe";
import { User } from "../../types";
import { SignInInfo } from "../../types";
import { useAppSelector } from "../store/hooks";
import { Message } from "../../types";

export const useMessages = () => {
  const [messages, setMessages] = useStateSafe<Message[]>([]);
  const apiDomain = getApiDomain();
  const signInInfo = useAppSelector((state) => state.signInInfo);

  const useMessagesByIds = (chatUserId: string, text: string) => {
    const getMessages = async () => {
      const postData = {
        userId: signInInfo.id,
        chatUserId: chatUserId,
      };
      const res = await axios.post(`${apiDomain}/getMessages`, postData);
      setMessages(res.data.messages);
      // setMessages(users.data.messages);
    };

    useEffect(() => {
      getMessages();
    }, [text]);
    return messages;
  };

  return { useMessagesByIds };
};
