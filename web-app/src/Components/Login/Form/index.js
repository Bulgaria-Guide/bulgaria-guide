import React, { Component } from 'react';
import './style.css';


class LoginForm extends React.Component {
    render() {
      return (
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
    }
  }
export default LoginForm;