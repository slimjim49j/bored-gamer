import React, { Component } from 'react'

import CategoryCheckBoxContainer from './category_checkbox_container';
import MechanicCheckBoxContainer from './mechanic_checkbox_container';
import Sort from './sort';


class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: false,
      mechanics: false,
    }
    
    this.handleCheckboxTitleClick = this.handleCheckboxTitleClick.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClickGames = this.handleClickGames.bind(this);
  }
    
  handleCheckboxTitleClick(field) {
    return () => {
      const newState = !this.state[field];
      this.setState({[field]: newState});
    }
  }

  handleFilterChange(e) {
    if (
      (e.target.tagName.toLowerCase() === "input" &&
      e.target.type === "checkbox") ||
      e.target.tagName.toLowerCase() === "select"
    ) {
      const categories = 
      Array.from(document
        .querySelectorAll(".categories-div input[type=checkbox]:checked"))
        .map(el => el.value);
      const mechanics = 
      Array.from(document
        .querySelectorAll(".mechanics-div input[type=checkbox]:checked"))
        .map(el => el.value);

      const sort = document.querySelector(".sort-dropdown :checked").value;
      const order = document.querySelector(".order-checkbox").checked ? -1 : 1;
        
      this.props.resetPageNum();
      const pageNum = 1;
      this.props.getInitialGames({pageNum, categories, mechanics, sort, order});
      this.props.incrementPageNum();
    }
  };

  handleClickGames(e) {
    e.preventDefault();
    document.querySelector("#games").scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
    
  render() {
      return (
        <div className="scroll-containers" onClick={this.handleFilterChange}>
          {/* filters */}
          
          <div className="categories-div checkboxes-wrapper">
            <p
              className={"checkbox-title"}
              onClick={this.handleCheckboxTitleClick("categories")}
            >
              Categories
            </p>
            <CategoryCheckBoxContainer hidden={this.state.categories} />
          </div>

          <div className="mechanics-div checkboxes-wrapper">
            <p
              className="checkbox-title"
              onClick={this.handleCheckboxTitleClick("mechanics")}
            >
              Mechanics
            </p>
            <MechanicCheckBoxContainer hidden={this.state.mechanics} />
          </div>

          {/* sort */}
          <Sort handleFilterChange={this.handleFilterChange} />
          <br/>
          <a className="a" onClick={this.handleClickGames}>See Games</a>
          <br/>
          <br/>
        </div>
      )
  }
}

export default Filters;