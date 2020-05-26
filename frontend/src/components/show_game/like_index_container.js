import { connect } from 'react-redux'
import LikeIndex from './like_index';
import { fetchAllLikes } from '../../actions/like_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    likes: state.entities.likes,
})

const mapDispatchToProps = dispatch => {
    return {  
        fetchAllLikes: gameId => dispatch(fetchAllLikes(gameId)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeIndex));
