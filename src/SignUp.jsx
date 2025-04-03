import "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Database from "./login.json";
import { useState } from "react";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function SignUp({ currentTheme }) {
  const textClass = currentTheme === "dark" ? "dark-text" : "light-text";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    getCookie("loggedIn") === "true"
  );

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const createAccount = (e) => {
    e.preventDefault();

    Database.users.push({
      username,
      email,
      password,
    });

    const fs = require("fs");
    const updatedData = JSON.stringify(Database);

    fs.writeFile("login.json", updatedData, (err) => {
      if (err) throw err;
      console.log("Account successfully created");
    });
  };

  const renderSignUpForm = () => (
    <Form
      className="login-form"
      data-bs-theme={textClass}
      onSubmit={createAccount}
    >
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label className={textClass}>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label className={textClass}>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label className={textClass}>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="secondary" type="submit">
        Sign Up
      </Button>
    </Form>
  );

  return <div className="pageContent">{renderSignUpForm()}</div>;
}

export default SignUp;
