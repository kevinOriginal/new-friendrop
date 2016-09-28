import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProfileCard } from '../../components';

const propTypes = {

};
const defaultProps = {

};

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col s12 m9 l10">
        <ProfileCard />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
