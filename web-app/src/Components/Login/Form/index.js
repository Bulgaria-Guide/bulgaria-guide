import React, { useCallback } from 'react';
import './styles.css';
import useField from 'hooks/useField';
import APIClient from 'ApiClient';

const LoginForm = () => {
  const usernameField = useField('');
  const passwordField = useField('');

  const handleSubmit = useCallback(event => {
    const data = {
      'username': usernameField.content,
      'password': passwordField.content
    };
    console.log(data);
    APIClient.login(data);
    event.preventDefault();
  }, [passwordField.content, usernameField.content]);

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
        <input type="submit" value="Влизане" />
      </form>
    </div>
  );
};
export default LoginForm;
