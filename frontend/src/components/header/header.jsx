import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/header.css';

class Header extends React.Component {
  render() {
    const { loggedIn, currentUser, logout } = this.props;

    const display = loggedIn ? (
      <div className="logout-container">
        <Link className="username-btn" to={`/users/${currentUser.id}/like`}>{currentUser.username}</Link>
        <button className="logout-btn" onClick={logout}>logout</button>
      </div>
    ) : (
      <div className="login-container">
        <Link className="login-header-btn" to="/login">login</Link>
        <Link className="login-header-btn" to="/signup">sign up</Link>
      </div>
    )

    return (
      <div className="main-header-div">
        <div className="header-left">
          <p className="dice">⚁</p>
          <Link className="logo-text" to="/"> bored gamer </Link>
          <p className="dice">⚂</p>
          <div className="dice-container"></div>
        </div>

        <div className="header-right">
          <Link className="about-link" to="/about">about</Link>
          {display}
        </div>
      </div>
    )
  }
}

export default withRouter(Header);