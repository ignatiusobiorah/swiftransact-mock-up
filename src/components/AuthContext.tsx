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
    name: "SETEMI",
    email: "user1@gmail.com",
    password: "12345",
    phone: "08098765573",
  },
  {
    id: "2",
    name: "Francis",
    email: "user2@gmail.com",
    password: "67890",
    phone: "09089086654",
  },
  {
    id: "3",
    name: "Joseph",
    email: "user3@gmail.com",
    password: "09876",
    phone: "07012345678",
  },
  {
    id: "4",
    name: "Janelle",
    email: "user4@gmail.com",
    password: "54321",
    phone: "09065437689",
  },
  {
    id: "5",
    name: "Jane",
    email: "user5@gmail.com",
    password: "56789",
    phone: "07058975432",
  },
];
