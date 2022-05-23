import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  state = {
    buttonDisabled: true,
    userName: '',
    logar: false,
    saveLogin: false,
  }

  saveInput = ({ target }) => {
    this.setState({
      userName: target.value,
    });
    const caractere = 3;
    const name = target.value.length;
    if (name >= caractere) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  inLogin = async () => {
    const { userName } = this.state;
    this.setState({
      logar: true,
    });
    await createUser({ name: userName });
    this.setState({
      saveLogin: true,
    });
  }

  render() {
    const { userName, buttonDisabled, logar, saveLogin } = this.state;
    if (saveLogin) return <Redirect to="/search" />;
    if (logar) return <Loading />;

    return (
      <form data-testid="page-login">
        <input
          type="text"
          data-testid="login-name-input"
          name="nome"
          placeholder="Insira seu Nome"
          value={ userName }
          onChange={ this.saveInput }
        />
        <button
          type="submit"
          data-testid="login-submit-button"
          onClick={ this.inLogin }
          disabled={ buttonDisabled }
        >
          Entrar
        </button>

      </form>

    );
  }
}

export default Login;
