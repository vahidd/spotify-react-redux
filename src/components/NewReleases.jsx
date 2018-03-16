import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

import CommonStyles from 'Styles/common.scss';
import AlbumItem from 'Components/common/AlbumItem';

export default class NewReleases extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1,
      infiniteScroll: false
    };
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  componentDidMount () {
    this.props.fetchNewReleases(40, (this.state.page - 1) * 40);
    this.infiniteScrollTimeout = setTimeout(() => {
      this.setState({infiniteScroll: true});
    }, 1000);
  }

  componentWillUnmount () {
    clearTimeout(this.infiniteScrollTimeout);
  }

  handleWaypointEnter () {
    if (this.props.newReleases.isFetching) {
      return;
    }
    this.setState(prevState => ({page: prevState.page + 1}));
    this.props.fetchNewReleases(40, (this.state.page - 1) * 40);
  }

  render () {
    const {data} = this.props.newReleases;
    if (!data) {
      return null;
    }
    return (
      <div>
        <div className={CommonStyles.title}>
          <h1>
            New Releases
          </h1>
        </div>
        <Row gutter={40}>
          {data.map((album, index) => {
            return (
              <Col
                key={album.id}
                span={6}
              >
                <AlbumItem album={album} />
              </Col>
            );
          })}
        </Row>
        {this.state.infiniteScroll &&
        <Waypoint
          bottomOffset="-600px"
          onEnter={this.handleWaypointEnter}
        />}
      </div>
    );
  }
}

NewReleases.propTypes = {
  newReleases: PropTypes.object.isRequired,
  fetchNewReleases: PropTypes.func.isRequired
};
