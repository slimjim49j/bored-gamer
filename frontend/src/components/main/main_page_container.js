import { connect } from 'react-redux';
import MainPage from './main_page';
import { log_out } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(log_out())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);