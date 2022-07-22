import React, { useRef } from "react";

function LoginForm({ userName, handleLogin, setLogin }) {
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
      console.log("incorrect");
    }
  }

  return (
    <form className="container" onClick={loginForm}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={nameRef} />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" ref={passwordRef} />
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
