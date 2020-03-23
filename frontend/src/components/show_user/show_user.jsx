import React from 'react';
import '../../assets/stylesheets/user_show.css'

class ShowUser extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="main-user-show-div">
        <div className="user-show-background"></div>

        <div className="user-contents">
          <div className="user-profile-message">
            <p>Hello {this.props.user.username}</p>
          </div>

          <div className="user-games">
            {/* clicking on game will lead to game show page */}
            <div>HERE IS GAME</div>
            <div>HERE IS GAME</div>
            <div>HERE IS GAME</div>
            <div>HERE IS GAME</div>
            <div>HERE IS GAME</div>
            <div>HERE IS GAME</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowUser;