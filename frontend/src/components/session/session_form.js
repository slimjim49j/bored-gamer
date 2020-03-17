import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      username: "",
      password: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user)

    this.ListeningStateChangedEvent({
      email: "",
      username: "",
      password: ""
    })
  }

  update(field) {
    return e => this.ListeningStateChangedEvent({
      [field]: e.currentTarget.value
    })
  }

  render() {

    return(
      <div className="main-session-div">

      </div>
    )
  }
}