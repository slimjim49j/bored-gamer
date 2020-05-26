import { connect } from 'react-redux'
import LikeItem from './like_item';
import { updateLike, destroyLike } from '../../actions/like_actions';

const mapStateToProps = state => ({
    currentUserId: state.session.user.id,
})

const mapDispatchToProps = dispatch => {
    return {
        updateLike: like => dispatch(updateLike(like)),
        destroyLike: likeId => dispatch(destroyLike(likeId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeItem);
