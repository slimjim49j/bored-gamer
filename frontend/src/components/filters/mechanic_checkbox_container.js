import { connect } from 'react-redux';
import MechanicCheckBox from './mechanic_checkbox';

import { getMechanics } from '../../util/game_util';
// import { getGames } from '../../util/game_index_util';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
    mechanics: () => getMechanics(), 
});

export default connect(mapStateToProps, mapDispatchToProps)(MechanicCheckBox);