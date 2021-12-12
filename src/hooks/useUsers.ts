import { useEffect } from "react";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { useStateSafe } from "../hooks/useStateSafe";
import { User } from "../../types";

export const useUsers = () => {
  const [users, setUsers] = useStateSafe<User[]>([]);
  const apiDomain = getApiDomain();

  const useUsersAll = () => {
    const getUsers = async () => {
      const users = await axios.get(`${apiDomain}/users`);
      setUsers(users.data.users);
    };
    useEffect(() => {
      getUsers();
    }, []);
  };

  //area条件でのuserHooks
  const useUsersByArea = (area: string) => {
    const getUsers = async () => {
      const users = await axios.get(`${apiDomain}/users_area?area=${area}`);
      setUsers(users.data.users);
    };

    useEffect(() => {
      getUsers();
    }, []);
    return users;
  };

  return { useUsersAll, useUsersByArea };
};
