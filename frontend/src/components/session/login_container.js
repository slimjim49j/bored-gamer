import { connect } from 'react-redux';
import { log_in } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  formType: 'log in'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(log_in(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);