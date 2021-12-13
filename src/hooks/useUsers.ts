import { useEffect } from "react";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { useStateSafe } from "../hooks/useStateSafe";
import { User } from "../../types";
import { SignInInfo } from "../../types";
import { useAppSelector } from "../store/hooks";

export const useUsers = () => {
  const signInInfo = useAppSelector((state) => state.signInInfo);
  const apiDomain = getApiDomain();

  const useUsersAll = () => {
    const [users, setUsers] = useStateSafe<User[]>([]);
    const getUsers = async () => {
      const users = await axios.get(`${apiDomain}/users`);
      setUsers(users.data.users);
    };
    useEffect(() => {
      getUsers();
    }, []);
    return users;
  };

  const useUserById = (id: string) => {
    const initialState = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      area: "",
    };
    const [user, setUser] = useStateSafe<User>(initialState);
    const getUser = async () => {
      const user = await axios.get(`${apiDomain}/user_id?id=${id}`);
      setUser(user.data.user);
    };
    useEffect(() => {
      getUser();
    }, []);
    return user;
  };

  //area条件でのuserHooks
  /**
   * @param {string} area: エリア
   */
  const useUsersByArea = (area: string) => {
    const [users, setUsers] = useStateSafe<User[]>([]);
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
    const [users, setUsers] = useStateSafe<User[]>([]);
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

  return { useUsersAll, useUserById, useUsersByArea, useApplyUsers };
};
