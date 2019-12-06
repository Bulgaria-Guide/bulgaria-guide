import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import useField from 'hooks/useField';
import APIClient from 'ApiClient';
import useAccount from 'hooks/useAccount';

const LoginForm = () => {
  const usernameField = useField('');
  const passwordField = useField('');
  const [unsuccessfulLogin, setUnsuccessfulLogin] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { loginAs } = useAccount();

  const handleSubmit = useCallback(event => {
    const data = {
      'username': usernameField.content,
      'password': passwordField.content
    };
    APIClient.login(data)
      .then(({ token }) => {
        APIClient.getRole(usernameField.content, token)
          .then(({ role }) => {
            loginAs(role, token);
            setShouldRedirect(true);
          });
      })
      .catch(err => {
        console.log(err);
        setUnsuccessfulLogin(true);
      });
    event.preventDefault();
  }, [loginAs, passwordField.content, usernameField.content]);

  return (
    <div className="loginbox">
      <h1>Влизане</h1>
      <form onSubmit={handleSubmit}>
        <p>Потребител</p>
        <input
          type="text"
          value={usernameField.content}
          onChange={usernameField.handleChange}
          placeholder="Въведете потребителско име" />
        <p>Парола</p>
        <input
          type="password"
          value={passwordField.content}
          onChange={passwordField.handleChange}
          placeholder="Въведете парола" />
        {unsuccessfulLogin && <p style={{ 'color': 'red' }}>Грешно потребителско име или парола</p>}
        <input type="submit" value="Влизане" />
      </form>
      {shouldRedirect && <Redirect to="/home" />}
      }}
    </div>
  );
};
export default LoginForm;
