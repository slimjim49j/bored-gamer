import React from 'react';
import '../../assets/stylesheets/main_page.css';



import GameIndexContainer from '../game_index/game_index_container';
import Filters from '../filters/filters';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClickStart = this.handleClickStart.bind(this);
  };

  handleClickStart(e) {
    e.preventDefault();
    document.querySelector("#start").scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  render() {
    const { loggedIn } = this.props;

    const display = loggedIn ? (
      <div className="logged-in-main">
        <div className="main-image-container"></div>
      </div>
    ) : (
      <div className="splash-page">
        <div className="splash-image-container"></div>
      </div>
    );

    return (
      <div className="main-page-div">
        <div className="display-div">
          {display}
          <p className="splash-title">bored gamer</p>
          <p className="splash-intro">For when you just don't know what to play</p>
          <br/>
          <br/>
          <button className="a" onClick={this.handleClickStart} >Get Started</button>
        </div>

        <br/>
        <div id ="start" className="games-checkbox-container">
          <div className="display-text">
            <h1>Ready for some games?</h1>
            <p>Choose categories and mechanics to receive games to play</p>
            <p>Select as many as you'd like to narrow down your options</p>
          </div>

          <Filters {...this.props} />

          <div id="games" className="display-text">
          </div>

          <div className="games-container">
            {<GameIndexContainer {...this.props} />}
          </div>
        </div>
      </div>
    );
  };
};

export default MainPage;