import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { resetPageNum } from "../../actions/session_actions";

import MainPage from './main_page';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  resetPageNum: () => dispatch(resetPageNum()),

})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);