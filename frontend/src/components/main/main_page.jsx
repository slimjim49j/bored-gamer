import React from 'react';
// import '../../assets/stylesheets/main_page.css';

import CategoryCheckBoxContainer from '../checkbox/category_checkbox_container';
import MechanicCheckBoxContainer from '../checkbox/mechanic_checkbox_container';

import GameIndexContainer from '../game_index/game_index_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: false,
      mechanics: false,
    }
    
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleClickGames = this.handleClickGames.bind(this);
    this.handleCheckboxTitleClick = this.handleCheckboxTitleClick.bind(this);
  };

  handleCheckboxTitleClick(field) {
    return () => {
      const newState = !this.state[field];
      this.setState({[field]: newState});
    }
  }

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
      this.props.incrementPageNum();
    }
  };

  handleClickStart(e) {
    e.preventDefault();
    document.querySelector("#start").scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  handleClickGames(e) {
    e.preventDefault();
    document.querySelector("#games").scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <a className="a" onClick={this.handleClickStart} >Get Started</a>
        </div>

        <br/>
        <div id ="start" className="games-checkbox-container">
          <div className="display-text">
            <h1>Ready for some games?</h1>
            <p>Choose categories and mechanics to receive games to play</p>
            <p>Select as many as you'd like to narrow down your options</p>
          </div>

          <div className="scroll-containers" onClick={this.handleCheckboxClick}>
            <div className="categories-div checkboxes-wrapper">
              <p
                className={"checkbox-title"}
                onClick={this.handleCheckboxTitleClick("categories")}
              >
                Categories
              </p>
              <CategoryCheckBoxContainer {...this.props} hidden={this.state.categories} />
            </div>

            <div className="mechanics-div checkboxes-wrapper">
              <p
                className="checkbox-title"
                onClick={this.handleCheckboxTitleClick("mechanics")}
              >
                Mechanics
              </p>
              <MechanicCheckBoxContainer {...this.props} hidden={this.state.mechanics} />
            </div>
            <br/>
            <a className="a" onClick={this.handleClickGames}>See Games</a>
            <br/>
            <br/>
          </div>


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