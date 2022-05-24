import React from 'react';
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
      </header>
    );
  }
}

export default Header;
