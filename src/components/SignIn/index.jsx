import { useState, useEffect } from "react";
import "./SignIn.css";
import { HiOutlineLockClosed } from "react-icons/hi";
import { TiEyeOutline } from "react-icons/ti";
import { handleLogin } from "../../utils/handleLogin";
import PageLoader from "../PageLoader";
import PopMessage from "../PopMessage";

const SignIn = () => {
  const [userData, setUserData] = useState(null);
  const [authErr, setAuthErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disapear, setDisapear] = useState(true);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    handleLogin(
      e,
      setEmailErr,
      setPasswordErr,
      setAuthErr,
      userData,
      setLoading,
      setDisapear
    );
  };

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="container-in">
          <h1 className="header">Welcome to medical Records Info</h1>
          <p className="para">
            Want to sign up?
            <a className="log" href="/sign-up">
              Sign Up
            </a>
          </p>
          <div className="authErr">
            {!disapear && (
              <PopMessage
                status="error"
                message={authErr}
                setDisapear={setDisapear}
              />
            )}
          </div>
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
            <div className="submit-group" onClick={handleSubmit}>
              <HiOutlineLockClosed className="icon" />
              <span>Login</span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignIn;
