import { emailValidator, passwordValidator } from "./validation";

export const handleLogin = async (
  e,
  setEmailErr,
  setPasswordErr,
  setAuthErr,
  userData,
  setLoading,
  setDisapear
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
    setLoading(true)
    const res = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const results = await res.json();

    if (results?.payload) {
      setAuthErr(null);
      localStorage.setItem("token", results.payload);
      window.location.href = "/";
      setLoading(false)
      return;
    }
    setAuthErr(results.message);
   
    setLoading(false)
    setDisapear(false)
    setTimeout(() => {
      setDisapear(true)
    }, 2000);
    return;
  } catch (error) {
    setAuthErr(error.message);
    setLoading(false)
    setDisapear(false)
    setTimeout(() => {
      setDisapear(true)
    }, 2000);
  }
};
