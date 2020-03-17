import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './login_form';

const mapStateToProps = (state) => ({
  formType: 'sign up'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(sign_up(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);