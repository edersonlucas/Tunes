import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading';
import Container from './styles';
import logo from '../../images/LogoTrybeTunes.svg';
import UserCardHeader from '../UserCardHeader';

class Header extends React.Component {
  state = {
    loggedInUsername: null,
  };

  componentDidMount() {
    this.getLoggedUser();
  }

  getLoggedUser = () => {
    this.setState({ loggedInUsername: null }, async () => {
      const username = await getUser();
      this.setState({ loggedInUsername: username });
    });
  };

  render() {
    const { loggedInUsername } = this.state;
    return (
      <Container>
        <header data-testid="header-component">
          <img alt="logo trybetunes" src={ logo } />
          {loggedInUsername ? (
            <UserCardHeader dados={ loggedInUsername } />
          ) : (
            <Loading />
          )}
        </header>
        <nav>
          <Link data-testid="link-to-search" to="/search">
            <span>
              <SearchIcon />
              Search
            </span>
          </Link>
          <Link data-testid="link-to-favorites" to="/favorites">
            <span>
              <FavoriteIcon />
              Favorites
            </span>
          </Link>
          <Link data-testid="link-to-profile" to="/profile">
            <span>
              <AccountCircleIcon />
              Profile
            </span>
          </Link>
        </nav>
      </Container>
    );
  }
}

export default Header;
