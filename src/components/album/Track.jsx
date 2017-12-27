import React from 'react';
import PropTypes from 'prop-types';
import styles from 'Styles/album.scss';
import { Row, Col, Icon } from 'antd';
import { Menu, Dropdown } from 'antd';

import { formatSeconds } from 'Services/UtilsService';

export default class Track extends React.Component {

  menu () {
    return <Menu>
      <Menu.Item>
        <a href="#">Save to Your Music</a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item>
        <a href="#">Copy Song Link</a>
      </Menu.Item>
    </Menu>;
  }

  render () {
    let {track} = this.props;
    return <Row className={styles.track}>
      <Col span={1}>
        <span className={styles['track-number']}>{track.track_number}</span>
      </Col>
      <Col span={16}>
        <span>{track.name}</span>
      </Col>
      <Col span={4} offset={3} className={styles.actions}>
        <span className={styles['track-len']}>{formatSeconds(track.duration_ms / 1000)}</span>
        <Dropdown overlay={this.menu()} trigger={['click']} placement="bottomRight">
          <a href="#" className={styles['more-icon']}>
            <Icon type="ellipsis"/>
          </a>
        </Dropdown>
      </Col>
    </Row>;
  }
}

Track.propTypes = {
  track: PropTypes.shape({}).isRequired
};