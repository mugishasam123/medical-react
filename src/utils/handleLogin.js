import { emailValidator, passwordValidator } from "./validation";

export const handleLogin = async (
  e,
  setEmailErr,
  setPasswordErr,
  setAuthErr,
  userData
) => {
  e.preventDefault();

  if (emailValidator(userData.email) || passwordValidator(userData.password)) {
    setEmailErr(emailValidator(userData.email));
    setPasswordErr(passwordValidator(userData.password));
    return;
  }

  setEmailErr("");
  setPasswordErr("");

  try {
    const res = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const results = await res.json();
    console.log("after signing", results);
    if (results?.payload) {
      setAuthErr(null);
      localStorage.setItem("token", results.payload);
      // window.location.href = "/";
      return;
    }
    setAuthErr(results.message);
    return;
  } catch (error) {
    console.log("error", error.message);
    setAuthErr(error.message);
  }
};
