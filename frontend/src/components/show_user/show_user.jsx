import React from 'react';
import '../../assets/stylesheets/user_show.css'

class ShowUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-user-show-div">
        <div className="user-profile-message">
          <p>Hello {this.props.user.username}</p>
        </div>

        <div>
          <p>Liked Games Here?</p>
        </div>
      </div>
    )
  }
}

export default ShowUser;