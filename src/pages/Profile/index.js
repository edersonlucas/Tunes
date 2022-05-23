import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import { Container, ContainerProfile } from './styles';

class Profile extends React.Component {
  state = {
    loading: false,
    loggedUser: {},
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const requestLoggedUser = await getUser();
      this.setState({ loading: false, loggedUser: requestLoggedUser });
    });
  }

  render() {
    const { loading, loggedUser } = this.state;
    const { description, email, image, name } = loggedUser;
    return (
      <Container data-testid="page-profile">
        <Header />
        {loading && <Loading />}
        {!loading && loggedUser && (
          <ContainerProfile>
            <div>
              <img
                data-testid="profile-image"
                src={ image }
                alt={ `pic of ${name}` }
              />
            </div>
            <p>
              Nome do usuário:
              {' '}
              {name}
            </p>
            <p>
              Email:
              {' '}
              {email}
            </p>
            <p>
              Descrição:
              {' '}
              {description}
            </p>
            <Link to="/profile/edit"><button type="button">Editar perfil</button></Link>
          </ContainerProfile>
        )}
      </Container>
    );
  }
}

export default Profile;
