import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  formType: 'sign up'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(sign_up(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);