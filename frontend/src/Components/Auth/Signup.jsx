import React from 'react'

const Signup = ({username, password, toggleForm, handleSignup, handleChange}) => {
  return (<div>
    <h2>Signup</h2>
    <form onSubmit={handleSignup}>
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
      <input type='submit' value='Sign-up' />
      <button onClick={toggleForm}>Have an account?</button>
    </form>
  </div>)
}

export default Signup;
