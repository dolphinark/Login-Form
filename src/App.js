import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [login, setLogin] = useState(false);
  const [useName, setUserName] = useState("")
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

  return (
    <div className="App">
      {login ? (
        <>
        <span>Welcome {useName}</span> <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <LoginForm setLogin={setLogin} handleLogin={handleLogin} userName={userName} />
      )}
    </div>
  );
}

export default App;
