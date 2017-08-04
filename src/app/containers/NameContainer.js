import {connect} from 'react-redux';

import Name from 'components/Name';

const mapStateToProps = (state) => {
  return {}
};

const NameContainer = connect(mapStateToProps, null)(Name);

export default NameContainer;