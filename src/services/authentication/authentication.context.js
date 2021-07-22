import React, { useState, createContext } from 'react';

import { loginRequest } from './authentication.service';

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

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        validationError,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
