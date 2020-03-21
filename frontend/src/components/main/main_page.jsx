import React from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/main_page.css';

import CategoryCheckBoxContainer from '../checkbox/category_checkbox_container';
import MechanicCheckBoxContainer from '../checkbox/mechanic_checkbox_container';

import GameIndexContainer from '../game_index/game_index_container';

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

       
      </div>
    ) : (
      <div className="splash-page">
        {/* <p>Hello you are logged out</p> */}
        <div className="splash-image-container">
          
        </div>
        <div className="splash-text-container">
          
        </div>
      </div>
    )

    return(
      <div className="main-page-div">
        <div className="display-div">
          {display}
          <p className="splash-title">bored gamer</p>
        </div>

        <div className="games-checkbox-container">
          <div className="display-text">
            <p>Blah blah blah choose some things and get a game yay</p>
          </div>

          <div className="scroll-containers">
            <div className="categories-div">
              <p className="checkbox-title">Categories</p>
              {< CategoryCheckBoxContainer {...this.props} />}
            </div>

            <div className="mechanics-div">
              <p className="checkbox-title">Mechanics</p>
              {< MechanicCheckBoxContainer {...this.props} />}
            </div>

          </div>

          <div className="games-container">
            {/* <p>SHOW GAMES HERE</p> */}
            {< GameIndexContainer {...this.props} />}
          </div>
        </div>
        <p className="artwork-cred">All artwork done by Brian Miller</p>
      </div>
    )
  }
}

export default MainPage;