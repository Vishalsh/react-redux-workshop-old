import {connect} from 'react-redux';

import Name from 'components/Name';

const mapStateToProps = (state) => {
  return {
    name: state.user.name
  }
};

const NameContainer = connect(mapStateToProps, null)(Name);

export default NameContainer;