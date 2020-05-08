import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/login_form.css';
import '../../assets/stylesheets/css_reset.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.login(user)
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  loginDemo(e) {
    e.preventDefault();
    e.stopPropagation();
    const demoUser = {
      username: "demo_user",
      password: "password"
    }
    this.props.login(demoUser)
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
      <div className="main-login-div">
        <div className="login-div">
          <div className="login-form">

            <div className="login-message">
              <p className="login-welcome">welcome back stranger</p>
            </div>
            
            <form className="session-form" onSubmit={this.handleSubmit}>
              <input
                className = "form-input"
                type="username"
                value={this.state.username}
                placeholder="username"
                onChange={this.update('username')}
              />

              <input
                className = "form-input"
                type="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.update('password')}
              />

              <input className="session-btn" type="submit" value="login" />
              <button className="demo-btn" onClick={this.loginDemo}>demo</button>
            </form>

            <div>
              {this.renderErrors()}
            </div>

            <div className="change-to-signup">
              <Link className="change-form-btn" to="/signup">sign up instead</Link>
            </div>
          </div>
          
          <div className="login-image-container">
          </div>


        
        </div>
      </div>
    )
  };
};

export default withRouter(LoginForm);