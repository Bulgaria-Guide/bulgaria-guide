import React, { Component } from 'react';
import './styles.css';

const RegisterForm = () => (
  <div class="registerbox">
    <h1>Регистрация</h1>
    <form>
      <p>Име</p>
      <input type="text" name="" placeholder="Име" />
      <p>Парола</p>
      <input type="password" name="" placeholder="Парола"/>
      <p>Повтори паролата</p>
      <input type="password" name="" placeholder="Повтори паролата"/>
      <input type="submit" name="" value="Регистрация"/>
    </form>
  </div>
);
export default RegisterForm;
