import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import { getUser, updateUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import Container from './styles';

class ProfileEdit extends React.Component {
  state = {
    loading: false,
    userHasBeenUpdate: false,
    isDisabled: true,
    name: '',
    image: '',
    email: '',
    description: '',
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const requestLoggedUser = await getUser();
      this.setState({
        name: requestLoggedUser.name,
        image: requestLoggedUser.image,
        email: requestLoggedUser.email,
        description: requestLoggedUser.description,
        loading: false,
      }, this.validateInfos);
    });
  }

  validateInfos = () => {
    const { name, image, description, email } = this.state;
    if (name && image && description && email.includes('@')) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      this.validateInfos,
    );
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ loading: true }, async () => {
      const { name, email, image, description } = this.state;
      const userUpdate = {
        name,
        email,
        image,
        description,
      };
      await updateUser(userUpdate);
      this.setState({ loading: false, userHasBeenUpdate: true });
    });
  };

  render() {
    const {
      loading,
      isDisabled,
      name,
      image,
      description,
      email,
      userHasBeenUpdate,
    } = this.state;
    return (
      <Container data-testid="page-profile-edit">
        <Header />
        { userHasBeenUpdate && <Redirect to="/profile" />}
        { loading && <Loading />}
        {!loading && (
          <form>
            <label htmlFor="name">
              Nome do usuário:
              <input
                id="name"
                onChange={ this.handleChange }
                name="name"
                data-testid="edit-input-name"
                type="text"
                value={ name }
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                onChange={ this.handleChange }
                name="email"
                data-testid="edit-input-email"
                type="text"
                value={ email }
              />
            </label>
            <label htmlFor="descricao">
              Descrição:
              <input
                id="descricao"
                onChange={ this.handleChange }
                name="description"
                data-testid="edit-input-description"
                type="text"
                value={ description }
              />
            </label>
            <label htmlFor="image">
              Link da imagem:
              <input
                id="image"
                onChange={ this.handleChange }
                name="image"
                data-testid="edit-input-image"
                type="text"
                value={ image }
              />
            </label>
            <button
              onClick={ this.handleClick }
              disabled={ isDisabled }
              data-testid="edit-button-save"
              type="button"
            >
              Salvar
            </button>
          </form>
        )}
      </Container>
    );
  }
}

export default ProfileEdit;
