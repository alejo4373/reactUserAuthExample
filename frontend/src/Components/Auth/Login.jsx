import React from 'react'

const Login = ({username, password, toggleForm, handleLogin, handleChange}) => {
  return (<div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <label> Username
       <input 
        required
        value={username}
        name='username'
        type='text'
        placeholder="Username"
        onChange={handleChange}
      />
      </label>
      <label> Password
        <input 
          required
          value={password}
          name='password'
          type='password'
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='Login' />
      <button onClick={toggleForm}>Don't have an account?</button>
    </form>
  </div>)
}

export default Login;
