import { connect } from 'react-redux';
import { log_in } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
  formType: 'log in'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(log_in(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);