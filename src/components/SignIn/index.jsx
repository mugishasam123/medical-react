import { useState } from 'react';
import './SignIn.css'
import { HiOutlineLockClosed } from "react-icons/hi";
import { TiEyeOutline } from "react-icons/ti";

const SignIn=()=>{

  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sign in", userData);
  };

    return(
        <div className="container-in">
      <h1 className="header">Welcome to medical Records Info</h1>
      <p className="para">
        Want to sign  up?
        <a className="log" href="/sign-up">
          Sign Up
        </a>
      </p>
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
        <div className="password-group">
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Your password"
            required
            className="pass"
          />
          <TiEyeOutline className="pass-icon" />
        </div>

        <div className="submit-group">
          <HiOutlineLockClosed className="icon" />
          <input className="submit" type="submit" value="Sign in" onClick={handleSubmit} />
        </div>
      </form>
    </div>
    )
}

export default SignIn;