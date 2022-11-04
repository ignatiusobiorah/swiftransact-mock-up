import React, { createContext, useContext, useState } from "react";

interface IUser {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
}
export interface ILoginInput {
  email: string;
  password: string;
}
export interface IAuthContext {
  users: IUser[];
  activeUser: IUser;
  getActiveUser: (input: ILoginInput) => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users] = useState<IUser[]>(data);
  const [activeUser, setActiveUser] = useState<IUser>({} as IUser);

  const getActiveUser = (input: ILoginInput) => {
    setActiveUser(
      users.find(
        (user) => user.email === input.email && user.password === input.password
      ) as IUser
    );

    // console.log(activeUser);
  };
  return (
    <AuthContext.Provider value={{ users, activeUser, getActiveUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// Dummy data
export const data: IUser[] = [
  {
    id: "1",
    name: "user1",
    email: "user1@gmail.com",
    password: "12345",
    phone: "08098765573",
  },
  {
    id: "2",
    name: "user2",
    email: "user2@gmail.com",
    password: "67890",
    phone: "09089086654",
  },
];
