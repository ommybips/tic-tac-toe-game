import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed in');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}

export default Login;
