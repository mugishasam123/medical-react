import { useState } from "react";
import "./SignUp.css";
import { HiOutlineLockClosed } from "react-icons/hi";
import { TiEyeOutline } from "react-icons/ti";
import {
  emailValidator,
  firstNameValidator,
  lastNameValidator,
  ageValidator,
  roleValidator,
  genderValidator,
  passwordValidator,
} from "../../utils/validation";

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    role: "",
    password: "",
  });
  const [firstNameErr, setFirstNameErr] = useState(null);
  const [lastNameErr, setLastNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [ageErr, setAgeErr] = useState(null);
  const [genderErr, setGenderErr] = useState(null);
  const [roleErr, setRoleErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstNameValidator(userData.firstName) ||
      lastNameValidator(userData.lastName) ||
      emailValidator(userData.email) ||
      ageValidator(userData.age) ||
      genderValidator(userData.gender) ||
      roleValidator(userData.role) ||
      passwordValidator(userData.password)
    ) {
      setFirstNameErr(firstNameValidator(userData.firstName));
      setLastNameErr(lastNameValidator(userData.lastName));
      setEmailErr(emailValidator(userData.email));
      setAgeErr(ageValidator(userData.age));
      setGenderErr(genderValidator(userData.gender));
      setRoleErr(roleValidator(userData.role));
      setPasswordErr(passwordValidator(userData.password));
      return;
    }
    setFirstNameErr("");
    setLastNameErr("");
    setEmailErr("");
    setAgeErr("");
    setGenderErr("");
    setRoleErr("");
    setPasswordErr("");
    console.log("sign up", userData);
  };

  return (
    <div className="container">
      <h1 className="header">Welcome to medical Records Info</h1>
      <p className="para">
        Already Signed up?
        <a className="log" href="/sign-in">
          Log in
        </a>
      </p>
      <form action="#" className="form">
        <div className="name">
          <div className="name-input">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              placeholder="Your First Name"
              className="input"
              required
            />
            {firstNameErr && <span className="err">{firstNameErr}</span>}
          </div>
          <div className="name-input">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Your Last Name"
              onChange={handleChange}
              required
              className="input"
            />
            {lastNameErr && <span className="err">{lastNameErr}</span>}
          </div>
        </div>
        <div className="err-group">
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
        </div>

        <div className="err-group">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          {ageErr && <span className="err">{ageErr}</span>}
        </div>
        <div className="err-group">
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={handleChange}
              className="input"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {genderErr && <span className="err">{genderErr}</span>}
        </div>
        <div className="err-group">
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              name="role"
              id="role"
              className="input"
              onChange={handleChange}
            >
              <option value="admin">Admin</option>
              <option value="physician">Physician</option>
              <option value="patient">Patient</option>
              <option value="pharmacist">Pharmacist</option>
            </select>
          </div>
          {roleErr && <span className="err">{roleErr}</span>}
        </div>

        <div className="err-group">
          <div className="password-group">
            <input
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Create password"
              required
              className="pass"
            />
            <TiEyeOutline className="pass-icon" />
          </div>
          {passwordErr && <span className="err">{passwordErr}</span>}
        </div>

        <div className="submit-group">
          <HiOutlineLockClosed className="icon" />
          <input
            className="submit"
            type="submit"
            value="Sign up"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
