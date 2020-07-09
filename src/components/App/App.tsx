import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import SignIn from '../SignIn/SignIn';
import SignOut from '../SignOut/SignOut';
import ChangePassword from '../ChangePassword/ChangePassword';
import About from '../../pages/About/About';
import VolunteerOpenings from '../../pages/VolunteerOpenings/VolunteerOpenings';

class App extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  setUser = user => this.setState({user});

  clearUser = () => this.setState({user: null});

  render() {
    const {user} = this.state;

    return (
      <Fragment>
        <Header user={user} />
        <main className="app-container">
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/volunteer/openings" render={() => <VolunteerOpenings />} />
            <Route path="/sign-in" render={() => <SignIn setUser={this.setUser} />} />
            <Route path="/admin" render={() => <Admin setUser={this.setUser} />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/*" render={() => <Home />} />
          </Switch>
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
            render={() => <SignOut clearUser={this.clearUser} user={user} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/change-password"
            render={() => <ChangePassword user={user} />}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
