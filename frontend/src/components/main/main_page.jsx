import React from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/main_page.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.viewGame = this.viewGame.bind(this);
  }

  viewGame(e) {
    this.props.history.push(`/game/${e.currentTarget.id}`)
  }

  render() {
    const { loggedIn, currentUser, games } = this.props;
    debugger
    const display = loggedIn ? (
      <div>
        <p>Hello you are logged in {currentUser.username}</p>
      </div>
    ) : (
      <div>
        <p>Hello you are logged out</p>
      </div>
    )

    return(
      <div className="main-page-div">
        {display}
      </div>
    )
  }
}

export default MainPage;