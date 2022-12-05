export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email can't be empty.";
  if (!re.test(email)) return "Invalid Email Address";
  return "";
}
export function firstNameValidator(firstName) {
  if (!firstName) return "First Name can't be empty.";
  return "";
}
export function lastNameValidator(lastName) {
  if (!lastName) return "Last Name can't be empty.";
  return "";
}
export function ageValidator(age) {
  if (!age) return "Age can't be empty.";
  return "";
}
export function genderValidator(gender) {
  if (!gender) return "Gender can't be empty.";
  return "";
}
export function roleValidator(role) {
  if (!role) return "Role can't be empty.";
  return "";
}

export function passwordValidator(password) {
  if (!password) return "Password can't be empty.";
  return "";
}
