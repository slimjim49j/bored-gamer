import React from 'react';
import { withRouter } from 'react-router-dom';

class MainPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div className="main-page-div">
        <h1>hello</h1>
      </div>
    )
  }
}

export default withRouter(MainPage);