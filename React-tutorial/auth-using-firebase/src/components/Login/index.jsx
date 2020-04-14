import React, { useState } from 'react';
import fire from '../../config/fire';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value); // e.target.value = existing value + new value entered
  };

  const onChangePasswordHandler = (e) => {
    setPassowrd(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form>

        <div>
          <label>Email</label>
          <input type="text" value="val" onChange={onChangeEmailHandler} />
        </div>

        <div>
          <label>Email</label>
          <input type="password" value={password} onChange={onChangePasswordHandler} />
        </div>

        <button type="submit" onClick={login}>SUBMIT</button>

      </form>
    </div>
  );
};

export default Login;
