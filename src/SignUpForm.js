import { useState } from "react";
import { validateEmail, formatNames } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function SignUpForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("role");
  const [showError, setShowError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailBlur = () => {
    setIsValidEmail(validateEmail(email));
  };
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const getIsFormValid = () => {
    console.log(password);
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password.isTouched === true &&
      role !== "role"
    ) {
      ("inside true");
      return true;
    } else {
      return false;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword({ value: e.target.value, isTouched: true });
    setShowError(e.target.value.length < 8);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailBlur();
    alert("Account created!");
    clearForm();
  };

  return (
    <div style={{ display: props.open ? "block" : "none" }}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-field">
            <label htmlFor="first">
              First Name <sup>*</sup>
            </label>
            <input
              id="first"
              name="First Name"
              type="text"
              value={formatNames(firstName)}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <label htmlFor="last">
              Last Name <sup>*</sup>
            </label>
            <input
              id="last"
              name="Last Name"
              type="text"
              value={formatNames(lastName)}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
            <label htmlFor="email">
              Email Address <sup>*</sup>
            </label>
            <input
              id="email"
              name="Email Address"
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="Email address"
            />
            {isValidEmail === false && (
              <p style={{ color: "red" }}>
                Please enter a valid email address.
              </p>
            )}
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <div>
              <input
                id="password"
                name="Password"
                type={showPassword ? "text" : "password"}
                value={password.value}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <button onClick={handleShowPassword}>Show</button>
              {showError && PasswordErrorMessage()}
            </div>

            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={getIsFormValid()}
          >
            Create Account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUpForm;
