import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="main-header-div">
        hi this is a header
        <div className="header-right">

        </div>
        
        <div className="header-left">

        </div>
      </div>
    )
  }
}

export default withRouter(Header);