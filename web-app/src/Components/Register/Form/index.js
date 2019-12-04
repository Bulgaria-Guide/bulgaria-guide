import React, { useCallback, useMemo, useState } from 'react';
import './styles.css';
import APIClient from 'ApiClient';
import useField from 'hooks/useField';

const RegisterForm = () => {
  const usernameField = useField('');
  const passwordField = useField('');
  const confirmPasswordField = useField('');

  const [formError, setFormError] = useState('');
  const [formWasSent, setFormWasSent] = useState(false);

  const isFormValid = useMemo(() => {
    if (usernameField.content.length < 1 || passwordField.content.length < 1) {
      setFormError('Потребителското име и парола са задължителни');
      return false;
    }
    if (passwordField.content.length < 6) {
      setFormError('Паролата трябва да е поне 6 символа');
      return false;
    }
    if (passwordField.content !== confirmPasswordField.content) {
      setFormError('Паролите трябва да съвпадат');
      return false;
    }
    setFormError('');
    return true;
  }, [confirmPasswordField.content, passwordField.content, usernameField.content.length]);

  const handleSubmit = useCallback(event => {
    setFormWasSent(true);
    if (isFormValid) {
      const data = {
        'username': usernameField.content,
        'password': passwordField.content
      };
      console.log(data);
      APIClient.register(data);
    }
    event.preventDefault();
  }, [isFormValid, passwordField.content, usernameField.content]);

  return (
    <div class="registerbox">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <p>Име</p>
        <input
          type="text"
          value={usernameField.content}
          onChange={usernameField.handleChange}
          placeholder="Име" />
        <p>Парола</p>
        <input
          type="password"
          value={passwordField.content}
          onChange={passwordField.handleChange}
          placeholder="Парола" />
        <p>Повтори паролата</p>
        <input
          type="password"
          value={confirmPasswordField.content}
          onChange={confirmPasswordField.handleChange}
          placeholder="Повтори паролата" />
        <input type="submit" value="Регистрация" />
      </form>
      {formWasSent && <p className="errorMessage">{formError}</p>}
    </div>
  );
};
export default RegisterForm;
