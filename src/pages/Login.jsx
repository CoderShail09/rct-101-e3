import React from "react";

const Login = () => {
  return (
    <div>
    
      <input data-cy="login-email" placeholder="Enter your email"/><br/>

      <input data-cy="login-password" type={"password"}  placeholder = "Enter your Password "/><br/>
      <button data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
