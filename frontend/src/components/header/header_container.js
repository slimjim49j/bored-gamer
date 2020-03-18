import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

export default connect(mapStateToProps)(Header);