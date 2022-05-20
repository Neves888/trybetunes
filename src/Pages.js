import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login';
import { Search } from './Search';
import { Album } from './Album';
import { Favorites } from './Favorites';
import { Profile } from './Profile';
import { ProfileEdit } from './ProfileEdit';
import { NotFound } from './NotFound';

class Page extends Component {
  render() {
    return (
      <BrowserRouter>
        <div data-testid="page-login">
          <Route path="/" component={ Login } />
        </div>
        <div data-testid="page-search">
          <Route path="/search" component={ Search } />
        </div>
        <div data-testid="page-album">
          <Route path="/album/:id" component={ Album } />
        </div>
        <div data-testid="page-favorites">
          <Route path="/favorites" component={ Favorites } />
        </div>
        <div data-testid="page-profile">
          <Route path="/profile" component={ Profile } />
        </div>
        <div data-testid="page-profile-edit">
          <Route path="/profile/edit" component={ ProfileEdit } />
        </div>
        <div data-testid="page-not-found">
          <Route path="*" component={ NotFound } />
        </div>
      </BrowserRouter>
    );
  }
}

export default Page;
