import React from 'react';
import fire from '../../config/fire';

const Home = () => (
  <div>
    Home
    <button type="submit" onClick={() => { fire.auth().signOut(); }}>LOGOUT</button>
  </div>
);

export default Home;
