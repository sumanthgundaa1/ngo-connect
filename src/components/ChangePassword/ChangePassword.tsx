import React, {Component} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {changePassword} from '../../api/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface IProps extends RouteComponentProps {
  history: any;
  user: any;
}

interface IState {
  oldPassword: string;
  newPassword: string;
  [x: number]: any;
}

class ChangePassword extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  onChangePassword = event => {
    event.preventDefault();

    const {history, user} = this.props;

    changePassword(this.state, user)
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({oldPassword: '', newPassword: ''});
        console.log(error);
      });
  };

  render() {
    const {oldPassword, newPassword} = this.state;

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Change Password</h3>
          <Form onSubmit={this.onChangePassword}>
            <Form.Group controlId="oldPassword">
              <Form.Label>Old password</Form.Label>
              <Form.Control
                required
                name="oldPassword"
                value={oldPassword}
                type="password"
                placeholder="Old Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                name="newPassword"
                value={newPassword}
                type="password"
                placeholder="New Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(ChangePassword);
