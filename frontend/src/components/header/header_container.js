import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout(logout()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);