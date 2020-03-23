import { connect } from 'react-redux';
import ShowGame from './show_game';
import { getOneGame } from '../../util/game_index_util';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  getOneGame: (gameId) => getOneGame(gameId)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowGame);