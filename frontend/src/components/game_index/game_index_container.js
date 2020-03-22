import { connect } from 'react-redux';
import GameIndex from './game_index';

import { getGames } from '../../util/game_index_util';

import { incrementPageNum, resetPageNum } from "../../actions/session_actions";

const mapStateToProps = state => ({
    pageNum: state.session.pageNum,
});

const mapDispatchToProps = dispatch => ({
  getGames: pageNum => getGames(pageNum),
  incrementPageNum: () => dispatch(incrementPageNum()),
  resetPageNum: () => dispatch(resetPageNum())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);