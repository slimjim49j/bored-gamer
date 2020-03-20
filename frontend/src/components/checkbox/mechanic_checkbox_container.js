import { connect } from 'react-redux';
import MechanicCheckBox from './mechanic_checkbox';

import { getMechanics } from '../../util/game_util';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    mechanics: () => getMechanics()
});

export default connect(mapStateToProps, mapDispatchToProps)(MechanicCheckBox);