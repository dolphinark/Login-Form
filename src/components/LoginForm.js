import React, { useRef } from "react";

function LoginForm({ userName, handleLogin, setLogin, handleError, error }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function loginForm(e) {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const details = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };
    if (
      enteredEmail === userName.email &&
      enteredPassword === userName.password
    ) {
      setLogin(true);
      handleLogin(details);
    } else {
      handleError();
    }
  }

  return (
    <form>
      <div className="container">
        <h2>Log in</h2>
        <div className="form-info">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className="form-info">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className="form-info">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" ref={passwordRef} />
        </div>
        <div className="error">{error}</div>
        <input type="submit" value="LOGIN" onClick={loginForm} />
      </div>
    </form>
  );
}

export default LoginForm;
