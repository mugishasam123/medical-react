import { useState } from "react";
import "./SignIn.css";
import { HiOutlineLockClosed } from "react-icons/hi";
import { TiEyeOutline } from "react-icons/ti";
import {handleLogin} from "../../utils/handleLogin"


const SignIn = () => {

  const [userData, setUserData] = useState(null);
  const [authErr, setAuthErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const handleChange = (e) => {
    
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="container-in">
      <h1 className="header">Welcome to medical Records Info</h1>
      <p className="para">
        Want to sign up?
        <a className="log" href="/sign-up">
          Sign Up
        </a>
      </p>
      {authErr && <span className="auth-err">{authErr}</span>}
      <form action="#" className="form">
        <input
          type="email"
          placeholder="Your Email"
          required
          name="email"
          onChange={handleChange}
          id="email"
          className="input"
        />
        {emailErr && <span className="err">{emailErr}</span>}
        <div className="password-group">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Your password"
            required
            className="pass"
          />
          <TiEyeOutline className="pass-icon" />
        </div>
        {passwordErr && <span className="err">{passwordErr}</span>}
        <div className="submit-group">
          <HiOutlineLockClosed className="icon" />
          <input
            className="submit"
            type="submit"
            value="Sign in"
            onClick={(e)=>handleLogin(e,setEmailErr,setPasswordErr,setAuthErr,userData)}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
