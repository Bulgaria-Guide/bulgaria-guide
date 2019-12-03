import React from 'react';
import './styles.css';

const LoginForm = () => (
  <div className="loginbox">
    <h1>Влизане</h1>
    <form>
      <p>Потребител</p>
      <input type="text" name="" placeholder="Въведете потребителско име" />
      <p>Парола</p>
      <input type="password" name="" placeholder="Въведете парола" />
      <input type="submit" name="" value="Влизане" />
    </form>
  </div>

);
export default LoginForm;
