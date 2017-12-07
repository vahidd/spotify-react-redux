import React from 'react';
import { Row, Col } from 'antd';
import Waypoint from 'react-waypoint';

import CommonStyles from 'Styles/common.scss';
import AlbumItem from 'Components/common/AlbumItem';

export default class NewReleases extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      page          : 1,
      infiniteScroll: false
    };
    this.onWaypointEnter = this.onWaypointEnter.bind(this);
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

  onWaypointEnter () {
    if (this.props.newReleases.isFetching) {
      return;
    }
    this.setState({page: this.state.page + 1});
    this.props.fetchNewReleases(40, (this.state.page - 1) * 40);
  }

  render () {
    let {data} = this.props.newReleases;
    if (!data) {
      return null;
    }
    return <div>
      <div className={CommonStyles.title}>
        <h1>New Releases</h1>
      </div>
      <Row gutter={40}>
        {data.map((album, index) => {
          return <Col key={index} span={6}>
            <AlbumItem album={album}/>
          </Col>;
        })}
      </Row>
      {this.state.infiniteScroll && <Waypoint
        bottomOffset="-500px"
        onEnter={this.onWaypointEnter}
      />}
    </div>;
  }
}
