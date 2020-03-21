import { connect } from 'react-redux';
import CategoryCheckBox from './category_checkbox';

import { getCategories } from '../../util/game_util';
import { getGames } from '../../util/game_index_util';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
    categories: () => getCategories(), 

});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCheckBox);