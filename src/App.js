import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <switch>
          <Route path="/" component={ Login } />

          <Route path="/search" component={ Search } />

          <Route path="/album/:id" component={ Album } />

          <Route path="/favorites" component={ Favorites } />

          <Route path="/profile" component={ Profile } />

          <Route path="/profile/edit" component={ ProfileEdit } />

          <Route path="/Loading" component={ Loading } />

          <Route path="*" component={ NotFound } />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
