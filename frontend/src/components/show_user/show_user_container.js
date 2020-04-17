import { connect } from 'react-redux';
import ShowUser from './show_user';
import { getDislikes } from '../../util/dislike_util';

const mapStateToProps = (state) => ({
  user: state.session.user
})

const mapDispatchToProps = () => ({
  getUserGames: (userId) => getDislikes(userId)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);