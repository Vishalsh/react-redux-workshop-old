import {connect} from 'react-redux';

import User from 'components/User';
import userActions from 'actions/userActions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => {
      dispatch(userActions.updateName(name));
    }
  }
};

const UserContainer = connect(null, mapDispatchToProps)(User);

export default UserContainer;