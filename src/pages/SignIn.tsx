import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthContext,
  ILoginInput,
  useAuthContext,
} from "../components/AuthContext";
import FrontLayout from "../components/FrontLayout";
import dollars from "../img/dollars.png";
import "../styles/signIn.scss";

const SignIn: React.FC = () => {
  const [input, setInput] = useState<ILoginInput>({} as ILoginInput);
  const { getActiveUser, activeUser } = useAuthContext() as IAuthContext;

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput({ email: "", password: "" });
    if (activeUser) {
      navigate(`/sign/:${activeUser.id}`);
    } else {
      alert("Invalid email or password entered");
    }
  };

  useEffect(() => {
    getActiveUser(input);
  }, [input, getActiveUser]);

  return (
    <FrontLayout>
      <div className="signIn">
        <div className="signInForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your mail:</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />

            <label htmlFor="password">Enter your password:</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />

            <button>SIGN IN</button>
          </form>
        </div>
        <div className="signInImage">
          <img src={dollars} alt="dollar-img" />
        </div>
      </div>
    </FrontLayout>
  );
};

export default SignIn;
