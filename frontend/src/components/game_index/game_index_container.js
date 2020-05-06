import { connect } from 'react-redux';
import GameIndex from './game_index';

import { getInitialGames, getMoreGames } from '../../actions/game_index_actions';

import { incrementPageNum, resetPageNum } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    pageNum: state.session.pageNum,
    games: state.entities.games,
    gameCount: state.session.gameCount,
});

const mapDispatchToProps = dispatch => ({
  getInitialGames: (pageNum, categories, mechanics) => dispatch(getInitialGames(pageNum, categories, mechanics)),
  getMoreGames: (pageNum, categories, mechanics) => dispatch(getMoreGames(pageNum, categories, mechanics)),
  incrementPageNum: () => dispatch(incrementPageNum()),
  resetPageNum: () => dispatch(resetPageNum())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);