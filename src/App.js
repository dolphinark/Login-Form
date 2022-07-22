import React from 'react'
import LoginForm from './components/LoginForm';

function App() {
  const userName = [{
    email:"123@yahoo.com.tw",
    password:"123"
  }]

 
  return (
    <div className="App">
      <LoginForm userName={userName}/>
    </div>
  );
}

export default App;
