import { useEffect } from "react";
import { getApiDomain } from "../utils/config";
import axios from "axios";
import { useStateSafe } from "../hooks/useStateSafe";
import { User } from "../../types";
import { useAppSelector } from "../store/hooks";

export const useUsers = () => {
  const signInInfo = useAppSelector((state) => state.signInInfo);
  const apiDomain = getApiDomain();

  /**
   * 全user取得
   */
  const useUsersAll = () => {
    const [users, setUsers] = useStateSafe<User[]>([]);
    useEffect(() => {
      const getUsers = async () => {
        await axios
          .get(`${apiDomain}/users`)
          .then((users) => {
            setUsers(users.data.users);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUsers();
    }, [setUsers]);
    return users;
  };

  /**
   * id条件でのuserHooks
   * @param {string} id: userId
   */
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
    useEffect(() => {
      const getUser = async () => {
        await axios
          .get(`${apiDomain}/user_id?id=${id}`)
          .then((users) => {
            setUser(users.data.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUser();
    }, [id, setUser]);
    return user;
  };

  /**
   * area条件でのuserHooks
   * @param {string} area: エリア
   */
  const useUsersByArea = (area: string) => {
    const [users, setUsers] = useStateSafe<User[]>([]);
    useEffect(() => {
      const getUsers = async () => {
        await axios
          .get(`${apiDomain}/users_area?area=${area}`)
          .then((users) => {
            setUsers(users.data.users);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUsers();
    }, [area, setUsers]);
    return users;
  };

  /**
   * apply条件でのuserHooks
   * @param signInInfo
   */
  const useApplyUsers = () => {
    const [users, setUsers] = useStateSafe<User[]>([]);
    useEffect(() => {
      const getUsers = async () => {
        await axios
          .get(`${apiDomain}/users_apply?id=${signInInfo.id}`)
          .then((users) => {
            setUsers(users.data.users);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUsers();
    }, [setUsers]);
    return users;
  };

  return { useUsersAll, useUserById, useUsersByArea, useApplyUsers };
};
