import { useEffect } from "react";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { useStateSafe } from "../hooks/useStateSafe";
import { User } from "../../types";
import { SignInInfo } from "../../types";
import { useAppSelector } from "../store/hooks";

export const useUsers = () => {
  const [users, setUsers] = useStateSafe<User[]>([]);
  const apiDomain = getApiDomain();
  const signInInfo = useAppSelector((state) => state.signInInfo);

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
  /**
   * @param {string} area: エリア
   */
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

  //apply条件でのuserHooks
  /**
   * @param signInInfo
   */
  const useApplyUsers = () => {
    const getUsers = async () => {
      const users = await axios.get(
        `${apiDomain}/users_apply?id=${signInInfo.id}`
      );
      setUsers(users.data.users);
    };
    useEffect(() => {
      getUsers();
    }, []);
    return users;
  };

  return { useUsersAll, useUsersByArea, useApplyUsers };
};
