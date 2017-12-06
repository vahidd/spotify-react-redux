import React from 'react';
import { connect } from 'react-redux';

import NewReleases from 'Components/NewReleases';
import { fetchNewReleases } from 'Actions/NewReleasesActions';

const mapStateToProps = state => ({
  newReleases: state.newReleases,
});

const NewReleasesContainer = props => <NewReleases {...props} />;

export default connect(mapStateToProps, {fetchNewReleases})(NewReleasesContainer);