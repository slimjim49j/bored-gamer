import { connect } from 'react-redux';
import CategoryCheckBox from './category_checkbox';

import { getCategories } from '../../util/game_util';
// import { getGames } from '../../util/game_index_util';

import { incrementPageNum, resetPageNum } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    pageNum: state.session.pageNum,
});

const mapDispatchToProps = dispatch => ({
  categories: () => getCategories(),
  incrementPageNum: () => dispatch(incrementPageNum()),
  resetPageNum: () => dispatch(resetPageNum())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCheckBox);