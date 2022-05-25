import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends React.Component {
  state = {
    userName: '',
    logar: true,
  }

  componentDidMount() {
    this.Logged();
  }

  Logged = async () => {
    const isLogin = await getUser();
    this.setState({
      userName: isLogin.name,
      logar: false,
    });
  };

  render() {
    const { userName, logar } = this.state;
    if (logar) return <Loading />;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          { userName }
        </p>
        { logar && <Loading /> }
        <Link exact data-testid="link-to-search" to="/search">Search</Link>
        <Link exact data-testid="link-to-favorites" to="/favorites">Favorites</Link>
        <Link exact data-testid="link-to-profile" to="/profile">Profile</Link>
      </header>
    );
  }
}

export default Header;
