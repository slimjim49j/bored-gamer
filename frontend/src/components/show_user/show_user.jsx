import React from 'react';

class ShowUser extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.receiveUser(this.props.match.params.userId)
  }

  render() {
    return (
      <div className="main-user-show-div">
        <p>Hello I am user</p>
      </div>
    )
  }
}

export default ShowUser;