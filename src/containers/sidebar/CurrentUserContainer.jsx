import React from 'react';
import { connect } from 'react-redux';

import CurrentUser from 'Components/sidebar/CurrentUser';
import { fetchCurrentUser } from 'Actions/UserActions';

const mapStateToProps = state => ({
  user: state.user,
});

const CurrentUserContainer = props => <CurrentUser {...props} />;

export default connect(mapStateToProps, {fetchCurrentUser})(CurrentUserContainer);