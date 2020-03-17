import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user)

    this.state({
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
    const { formType } = this.props;

    const display = formType === 'log in' ? (
      <div className="change-form">

      </div>
    ) : (
      <div className="change-form">

      </div>
    )

    return(
      <div className="main-session-div">
        <div className="main-session-container">
          
          <div className="change-form-container">
            {display}
          </div>
        </div>
        
      </div>
    )
  }
}

export default withRouter(SessionForm);