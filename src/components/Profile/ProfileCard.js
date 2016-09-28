import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class ProfileCard extends Component {

  constructor(props) {
    super(props);

    this.renderProfile = this.renderProfile.bind(this);
  }

  renderProfile() {
    if(this.props.profile) {
      let profile = this.props.profile; // 효율을 위해

      return (
        <div className="card-panel">
          <p>{profile.name}</p>
          <p>{profile.nickname}</p>
          <p>{profile.school} {profile.major}</p>
        </div>
      );

    }
  }
  render() {

    return(
        <div>
        <h3>Profile</h3>
        <hr/>
          {this.renderProfile()}
        </div>
    );
  }
}

ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
