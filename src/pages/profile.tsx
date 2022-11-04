import React from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext, useAuthContext } from "../components/AuthContext";

const Profile = () => {
  const { activeUser } = useAuthContext() as IAuthContext;
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>BACK</button>
      <h1>{activeUser?.name}</h1>
      <h1>{activeUser?.email}</h1>
      <h1>{activeUser?.phone}</h1>
    </div>
  );
};

export default Profile;
