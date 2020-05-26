import { connect } from 'react-redux';
import LikeForm from './like_form';
import { createLike } from '../../actions/like_actions';

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = dispatch => {
    return {
        createLike: like => dispatch(createLike(like)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeForm);