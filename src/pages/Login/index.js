import React from 'react';
import { Redirect } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';
import { createUser } from '../../services/userAPI';
import Container from './styles';
import Logo from '../../images/LogoTrybeTunes.svg';

class Login extends React.Component {
  state = {
    userLogin: '',
    buttonIsDisabled: true,
    loading: false,
    isLogged: false,
  };

  handleChange = ({ target: { value } }) => {
    const minimumNumberOfCharactersLogin = 3;
    this.setState({
      userLogin: value,
      buttonIsDisabled: value.length < minimumNumberOfCharactersLogin,
    });
  };

  handleClick = async (event) => {
    const { userLogin } = this.state;
    event.preventDefault();
    this.setState({ loading: true }, async () => {
      await createUser({ name: userLogin });
      this.setState({
        loading: false,
        isLogged: true,
      });
    });
  }

  render() {
    const { buttonIsDisabled, loading, isLogged } = this.state;
    return (
      <Container data-testid="page-login">
        <img alt="logo trybetunes" src={ Logo } />
        <form>
          <label htmlFor="login">
            Login:
            <input
              onChange={ this.handleChange }
              data-testid="login-name-input"
              type="text"
              id="login"
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            onClick={ this.handleClick }
            disabled={ buttonIsDisabled }
          >
            Entrar
          </button>
        </form>
        {loading && <LoadingPage />}
        {isLogged && <Redirect to="/search" />}
      </Container>
    );
  }
}

export default Login;
