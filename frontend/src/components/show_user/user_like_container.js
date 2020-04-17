import { connect } from 'react-redux';
import ShowUserLike from './user_show';
import { getDislikes } from '../../util/dislike_util';

const mapStateToProps = (state) => ({
  user: state.session.user,
  dislikeBool: false,
})

const mapDispatchToProps = () => ({
  getUserGames: (userId, dislike) => getDislikes(userId, dislike)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowUserLike);