import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/signup_form.css';
import '../../assets/stylesheets/css_reset.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.signup(user)

    this.state({
      email: "",
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
      <div className="main-signup-div">
        <div className="signup-div">

          <div className="signup-image-container"></div>

          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text"
                value={this.state.email}
                placeholder="email"
                onChange={this.update('email')}
                />

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

                <input 
                  type="password"
                  value={this.state.password2}
                  placeholder="confirm password"
                  onChange={this.update('password2')}
                />

                <input type="submit" value="sign up"/>
            </form>
            <div className="change-to-login">
              <Link className="change-form-btn" to="/login">login instead</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignupForm);