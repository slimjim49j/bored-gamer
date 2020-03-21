import { connect } from 'react-redux';
import GameIndex from './game_index';

import { getGames } from '../../util/game_index_util';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    getGames: (pageNum) => getGames(pageNum)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);