import { connect } from 'react-redux';
import ShowUser from './show_user';

const mapStateToProps = state => ({
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);