import {
  emailValidator,
  firstNameValidator,
  lastNameValidator,
  ageValidator,
  roleValidator,
  genderValidator,
  passwordValidator,
} from "./validation";

export const handleRegister = async (
  e,
  setFirstNameErr,
  setLastNameErr,
  setEmailErr,
  setAgeErr,
  setAuthErr,
  setGenderErr,
  setRoleErr,
  setPasswordErr,
  userData,
  setLoading,
  setDisapear
) => {
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

  try {
    setLoading(true)
    const res = await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const results = await res.json();

    if (results.payload) {
      setAuthErr(null);
      setLoading(false)
      window.location.href = "/sign-in";
    } else {
      setAuthErr(results.message);
      setLoading(false)
      setDisapear(false)
      setTimeout(() => {
        setDisapear(true)
      }, 2000);
    }
  } catch (error) {
    console.log("error", error.message);
    setLoading(false)
    setDisapear(false)
    setTimeout(() => {
      setDisapear(true)
    }, 2000);
  }
};
