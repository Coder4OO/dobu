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

function Login({ currentTheme }) {
  const textClass = currentTheme === "dark" ? "dark-text" : "light-text";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(getCookie("loggedIn") === "true");

  function updateEmail(newEmail) {
    setEmail(newEmail);
  }

  function updatePassword(newPassword) {
    setPassword(newPassword);
  }

  function updateLoggedIn(newLoggedIn) {
    setLoggedIn(newLoggedIn);
  }

  function checkLogin(e) {
    e.preventDefault(); // Prevents page refresh

    const users = Database.users; // Access users from JSON file
    const user = users.find(
      (user) => user.email.trim() === email && user.password === password.trim()
    );

    if (user) {
      console.log("Logged in");
      alert("Logged in successfully!");
      document.cookie = "username=" + user.username.trim();
      document.cookie = "loggedIn=true";
      updateLoggedIn(true);
      location.href = location.href;
    } else {
      console.log("Could not log in.");
      alert("Invalid email or password.");
      document.cookie = "loggedIn=false";
      document.cookie = "username=";
      updateLoggedIn(false);
    }
  }

  function renderLogin() {
    const isUserLoggedIn = loggedIn;
    const userLoginAction = isUserLoggedIn ? logOut : logIn;
    const loginForm = isUserLoggedIn ? (
      <>
        <h1 className={textClass}>Logged in!</h1>
        <Button onClick={userLoginAction} variant="secondary">
          {isUserLoggedIn ? "Log Out" : "Log In"}
        </Button>
      </>
    ) : (
      <>
        <Form
          data-bs-theme={textClass}
          className="login-form"
          onSubmit={checkLogin}
        >
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className={textClass}>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className={textClass}>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Log in
          </Button>
        </Form>
      </>
    );

    return <div className="pageContent">{loginForm}</div>;
  }

  function logIn() {
    checkLogin({ preventDefault: () => {} });
  }

  function logOut() {
    updateLoggedIn(false);
    alert("Successfully logged out!");
    document.cookie = "loggedIn=false";
    document.cookie = "username=";
    location.href = location.href;
  }

  return (
    <>
      <div className="pageContent">{renderLogin()}</div>
    </>
  );
}

export default Login;
