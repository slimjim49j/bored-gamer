import { connect } from 'react-redux';
import ShowGame from './show_game';
import { getOneGame } from '../../util/game_index_util';
import { receiveDestination } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  getOneGame: (gameId) => getOneGame(gameId), 
  receiveDestination: destination => dispatch(receiveDestination(destination)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowGame);