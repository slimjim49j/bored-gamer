import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainPage from './main_page';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  // games: Object.values(state.entities.games)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);