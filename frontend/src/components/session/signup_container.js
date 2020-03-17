import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
  formType: 'sign up'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);