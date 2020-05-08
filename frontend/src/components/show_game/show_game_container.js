import { connect } from 'react-redux';
import ShowGame from './show_game';
import { getOneGame } from '../../util/game_index_util';
import { createLike } from '../../util/dislike_util';
import { getGameLikes } from '../../util/dislike_util';
import { receiveDestination } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  getOneGame: (gameId) => getOneGame(gameId), 
  createLike: (like) => createLike(like),
  receiveDestination: destination => dispatch(receiveDestination(destination)),
  getGameLikes: gameId => getGameLikes(gameId),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowGame);