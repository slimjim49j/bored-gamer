import React from 'react';
import '../../assets/stylesheets/main_page.css';

import CategoryCheckBoxContainer from '../checkbox/category_checkbox_container';
import MechanicCheckBoxContainer from '../checkbox/mechanic_checkbox_container';

import GameIndexContainer from '../game_index/game_index_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  };

  handleCheckboxClick(e) {
    if (
      e.target.tagName.toLowerCase() === "input" &&
      e.target.type === "checkbox"
    ) {
      const categories = 
      Array.from(document
        .querySelectorAll(".categories-div input[type=checkbox]:checked"))
        .map(el => el.value);
      const mechanics = 
      Array.from(document
        .querySelectorAll(".mechanics-div input[type=checkbox]:checked"))
        .map(el => el.value);
      this.props.resetPageNum();
      
      const pageNum = 1;
      this.props.getInitialGames(pageNum, categories, mechanics);
    };
  };

  render() {
    const { loggedIn, currentUser, games } = this.props;

    const display = loggedIn ? (
      <div className="logged-in-main">
        <div className="main-image-container"></div>
      </div>
    ) : (
      <div className="splash-page">
        <div className="splash-image-container"></div>
        <div className="splash-text-container"></div>
      </div>
    );

    return (
      <div className="main-page-div">
        <div className="display-div">
          {display}
          <p className="splash-title">bored gamer</p>
        </div>

        <div className="games-checkbox-container">
          <div className="display-text">
            <p>Choose categories and mechanics to receive games to play</p>
          </div>

          <div className="scroll-containers" onClick={this.handleCheckboxClick}>
            <div className="categories-div">
              <p className="checkbox-title">Categories</p>
              {<CategoryCheckBoxContainer {...this.props} />}
            </div>

            <div className="mechanics-div">
              <p className="checkbox-title">Mechanics</p>
              {<MechanicCheckBoxContainer {...this.props} />}
            </div>
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