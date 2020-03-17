import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.login(user)

    this.state({
      username: "",
      password: ""
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  render() {

    return (
      <div className="main-session-div">
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="username"
              value={this.state.username}
              placeholder="username"
              onChange={this.update('username')}
            />

            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.update('password')}
            />

            <input type="submit" value="login" />
          </form>
        </div>

        <div className="change-to-signup">
          <p>sign up instead</p>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginForm);