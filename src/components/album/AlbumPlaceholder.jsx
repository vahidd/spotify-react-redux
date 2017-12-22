import React from 'react';
import { RectShape } from 'react-placeholder/lib/placeholders';
import { Row, Col } from 'antd';

import styles from 'Styles/album.scss';

export default class AlbumPlaceholder extends React.Component {

  constructor () {
    super();
    this.randomArray = Array.from({length: 10}, (val, key) => key);
  }

  render () {
    return <Row gutter={40}>
      <Col span={6}>
        <RectShape className={styles['rect-shape']} color='#f1f1f1' style={{width: 260, height: 260}}/>
      </Col>
      <Col span={18}>
        <RectShape className={styles['rect-shape']} color='#f1f1f1' style={{marginTop: 10, width: 360, height: 28}}/>
        <RectShape className={styles['rect-shape']} color='#f1f1f1' style={{marginTop: 10, width: 250, height: 20}}/>
        <RectShape className={styles['rect-shape']} color='#f1f1f1' style={{marginTop: 15, width: 300, height: 13}}/>
        <div style={{marginTop: 50}}>
          {this.randomArray.map((index) => {
            return <RectShape className={styles['rect-shape']} key={index} color='#f1f1f1' style={{
              marginTop: 13,
              width    : '100%',
              height   : 30
            }}/>;
          })}
        </div>
      </Col>
    </Row>;
  }
}
