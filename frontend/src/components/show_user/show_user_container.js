import { connect } from 'react-redux';
import ShowUser from './show_user';
import { receiveCurrentUser } from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  receiveUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);