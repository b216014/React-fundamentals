import React, { useState } from 'react';
import fire from '../../config/fire';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const signup = () => {
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form>

        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={onChangeEmailHandler} />
        </div>

        <div>
          <label>Email</label>
          <input type="password" value={password} onChange={onChangePasswordHandler} />
        </div>

        <button type="submit" onClick={signup}>SUBMIT</button>

      </form>
    </div>
  );
};

export default SignUp;
