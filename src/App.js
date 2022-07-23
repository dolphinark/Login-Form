import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [login, setLogin] = useState(false);
  const [useName, setUserName] = useState("")
  const [error, setError] = useState("")
  const userName = {
    email: "123@yahoo.com.tw",
    password: "123",
  };

  function handleLogin(details) {
    setUserName(details.name)
  }

  function handleLogout(){
    setLogin(false)
  }

  function handleError(){
    setError("*incorrect email address or password")
  }

  return (
    <div className="App">
      {login ? (
        <div className="welcome">
        <h2>Welcome <span>{useName}</span></h2> <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <LoginForm setLogin={setLogin} handleLogin={handleLogin} userName={userName} handleError={handleError} error={error}/>
      )}
    </div>
  );
}

export default App;
