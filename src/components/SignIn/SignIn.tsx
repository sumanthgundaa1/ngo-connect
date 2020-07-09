import React, {Component} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import {signIn} from '../../api/auth';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

interface IProps extends RouteComponentProps {
  history: any;
  setUser: any;
}

class SignIn extends Component<IProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  onSignIn = event => {
    event.preventDefault();

    const {history, setUser} = this.props;

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({username: '', password: ''});
        console.log(error);
      });
  };

  render() {
    const {username, password} = this.state;

    return (
      <Card bg="success" className="bg-light m-2" style={{maxWidth: '50rem'}}>
        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          <Form onSubmit={this.onSignIn}>
            <Form.Group controlId="username">
              <Form.Control
                required
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <hr />
          <Alert variant="warning">
            <Alert.Heading>Admin only</Alert.Heading>
            <p>This is a restricted section for admin only.</p>
          </Alert>
        </Card.Body>
      </Card>
    );
  }
}

export default withRouter(SignIn);
