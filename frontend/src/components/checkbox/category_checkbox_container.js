import { connect } from 'react-redux';
import CategoryCheckBox from './category_checkbox';

import { getCategories } from '../../util/game_util';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    categories: () => getCategories()
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCheckBox);