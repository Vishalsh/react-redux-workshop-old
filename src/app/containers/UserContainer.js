import {connect} from 'react-redux';

import User from 'components/User';

const mapDispatchToProps = (dispatch) => {
  return {}
};

const UserContainer = connect(null, mapDispatchToProps)(User);

export default UserContainer;