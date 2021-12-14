import { useEffect } from "react";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { useStateSafe } from "../hooks/useStateSafe";
import { useAppSelector } from "../store/hooks";
import { Message } from "../../types";

export const useMessages = () => {
  const [messages, setMessages] = useStateSafe<Message[]>([]);
  const apiDomain = getApiDomain();
  const signInInfo = useAppSelector((state) => state.signInInfo);

  const useMessagesByIds = (chatUserId: string, text: string) => {
    useEffect(() => {
      const getMessages = async () => {
        const postData = {
          userId: signInInfo.id,
          chatUserId: chatUserId,
        };
        await axios
          .post(`${apiDomain}/getMessages`, postData)
          .then((res) => {
            setMessages(res.data.messages);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getMessages();
    }, [text, chatUserId]); //textが親コンポーネントで入力されるたびにレンダリングしたい
    return messages;
  };

  return { useMessagesByIds };
};
