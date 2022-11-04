import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { IAuthContext, useAuthContext } from "../components/AuthContext";
import "../styles/profile.scss";

const Profile = () => {
  const { activeUser } = useAuthContext() as IAuthContext;
  const navigate = useNavigate();

  return (
    <div className="profile">
      <Helmet>
        <title>Swiftransact</title>
        <meta
          name="description"
          content="Effortlessly manage your digital assets and make instant
            transactions across the Milky Way.."
        />
        <link rel="canonical" href="/sign/:id" />
      </Helmet>
      <button onClick={() => navigate(-1)}>BACK</button>
      <div className="profileContent">
        <div className="welcome">
          <h1>Welcome:</h1>
          <h2>{activeUser?.name}</h2>
        </div>
        <div className="details">
          <h2>Your detail:</h2>
          <ul>
            <li>
              <span>Email:</span>
              {activeUser?.email}
            </li>
            <li>
              <span>Phone:</span>
              {activeUser?.phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
