import {Component} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {signOut} from '../../api/auth';

interface IProps extends RouteComponentProps {
  history: any;
  user: any;
  clearUser: any;
}

class SignOut extends Component<IProps, any> {
  componentDidMount() {
    const {history, clearUser, user} = this.props;

    signOut(user)
      .finally(() => history.push('/'))
      .finally(() => clearUser());
  }

  render() {
    return '';
  }
}

export default withRouter(SignOut);
