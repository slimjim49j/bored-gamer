import React from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/main_page.css';

import CategoryCheckBoxContainer from '../checkbox/category_checkbox_container';
import MechanicCheckBoxContainer from '../checkbox/mechanic_checkbox_container';

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

    const display = loggedIn ? (
      <div className="logged-in-main">
        {/* <p>Hello you are logged in {currentUser.username}</p> */}
        <div className="main-image-container"></div>

        <div className="games-index-container">
          <p>LOTS OF GAMES WILL BE HERE????</p>
          <p>GAMES</p>
          <p>GAMES</p>
        </div>
      </div>
    ) : (
      <div className="splash-page">
        {/* <p>Hello you are logged out</p> */}
        <div className="splash-image-container">
          <p className="splash-title">bored gamer</p>
        </div>
        <div className="splash-text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.</p>
              <br/>
              <p>All artwork done by Brian Miller</p>
        </div>
      </div>
    )

    return(
      <div className="main-page-div">
        <div className="display-div">
          {display}
        </div>

        <div className="categories-div">
          {< CategoryCheckBoxContainer {...this.props} />}
        </div>
        <p>-----------</p>
        <div className="mechanics-div">
          {< MechanicCheckBoxContainer {...this.props} />}
        </div>
      </div>
    )
  }
}

export default MainPage;