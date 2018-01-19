import React from 'react';
import PropTypes from 'prop-types';
import styles from 'Styles/album.scss';
import { Menu, Dropdown, Row, Col, Icon, notification } from 'antd';

import { formatSeconds } from 'Services/UtilsService';

export default class Track extends React.Component {

  constructor (props) {
    super(props);
    this.copyLink = this.copyLink.bind(this);
  }

  copyLink () {
    let
      textarea = document.createElement('textarea'),
      link = this.props.track.external_urls.spotify;
    textarea.textContent = link;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      notification.success({
        placement  : 'bottomRight',
        message    : 'Copied!',
        description: <span style={{wordBreak: 'break-word'}}>{link}</span>,
        duration   : 2
      });
    } catch (err) {
      notification.error({
        placement  : 'bottomRight',
        message    : 'Whoops something went wrong!',
        description: <span style={{wordBreak: 'break-word'}}>{link}</span>,
        duration   : 10
      });
    }
    finally {
      document.body.removeChild(textarea);
    }
  }

  menu () {
    return <Menu>
      <Menu.Item disabled={this.props.isSaved === null}>
        <a href="#" onClick={this.props.toggleSaveTrack} disabled={this.props.isSaved === null}>
          {this.props.isSaved === null || this.props.isSaved === false ? 'Save to Your Music' : 'Remove from Your Music'}
        </a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item>
        <a onClick={this.copyLink} href="#">Copy Song Link</a>
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
  track          : PropTypes.shape({}).isRequired,
  toggleSaveTrack: PropTypes.func.isRequired,
  isSaved        : PropTypes.oneOf([null, true, false])
};