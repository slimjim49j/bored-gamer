import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout(logout()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);