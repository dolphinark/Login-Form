import React, { useEffect, useRef } from "react";

function LoginForm({userName}) {
    const emailRef= useRef()
    const passwordRef = useRef()


    function login(e){
        e.preventDefault()
        if(emailRef.current===userName.email && passwordRef.current===userName.password){
            console.log("login")
        }
        else{
            console.log("incorrect")
        }
    }
   
  return (
    <form className="container" onClick={login}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" ref={emailRef}/>
      <label htmlFor="password">Password</label>
      <input type="text" id="password" ref={passwordRef}/>
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
