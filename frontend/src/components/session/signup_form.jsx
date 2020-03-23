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
  };

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.signup(user)
    this.props.login(user);

    this.setState({
      email: "",
      username: "",
      password: "",
      password2: "",
    })
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  };

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  };

  componentWillUnmount() {
    this.props.removeErrors();
  };

  render() {

    return (
      <div className="main-signup-div">
        <div className="signup-div">

          <div className="signup-image-container"></div>

          <div className="signup-form">

            <div className="signup-message">
              <p className="signup-welcome">join us</p>
            </div>

            <form className="session-form" onSubmit={this.handleSubmit}>
              <input 
                className="form-input"
                type="text"
                value={this.state.email}
                placeholder="email"
                onChange={this.update('email')}
                />

                <input 
                  className="form-input"
                  type="username"
                  value={this.state.username}
                  placeholder="username"
                  onChange={this.update('username')}
                />

                <input 
                  className="form-input"
                  type="password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.update('password')}
                />

                <input 
                  className="form-input"
                  type="password"
                  value={this.state.password2}
                  placeholder="confirm password"
                  onChange={this.update('password2')}
                />

                <input className="session-btn" type="submit" value="sign up"/>
            </form>

            <div>
              {this.renderErrors()}
            </div>

            <div className="change-to-login">
              <Link className="change-form-btn" to="/login">login instead</Link>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default withRouter(SignupForm);