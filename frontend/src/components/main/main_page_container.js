import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { resetPageNum, incrementPageNum } from "../../actions/session_actions";
import { getInitialGames } from "../../actions/game_index_actions";

import MainPage from './main_page';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  pageNum: state.session.pageNum,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  resetPageNum: () => dispatch(resetPageNum()),
  incrementPageNum: () => dispatch(incrementPageNum()),
  getInitialGames: (pageNum, categories, mechanics) => dispatch(getInitialGames(pageNum, categories, mechanics)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);