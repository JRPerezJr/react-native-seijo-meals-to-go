import React, { useState, createContext } from 'react';

import { loginRequest, registerUser } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);

    loginRequest(email, password)
      .then(userData => {
        setUser(userData);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        if (error.code === 'auth/invalid-email') {
          setValidationError('Incorrect email or password');
        }
        if (error.code === 'auth/wrong-password') {
          setValidationError('Incorrect email or password');
        }
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    registerUser(email, password, confirmPassword)
      .then(newUser => {
        setUser(newUser);
        console.log('User account created & signed in!');
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.code);
        console.log(error.message);
        setIsLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          setValidationError('That email address is already in use!');
        }
        if (error.code === 'auth/weak-password') {
          setValidationError('Password should be at least 6 characters.');
        }
        if (error.code === 'auth/invalid-email') {
          setValidationError('That email address is invalid!');
        }
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        validationError,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
