import * as React from 'react';
import { Progress, Row, Col } from 'antd';
import styles from './index.less';
import TaskTableList from './TaskTableList';
export interface IProps {
}

export default class Daily extends React.Component<IProps> {
  public render() {
    return (
      <div className={styles.dailyWarp}>
        <div className={styles.overview}>
          <h1>数据看版</h1>
          <Row className={styles.overviewProgress}>
            <Col span={8}>
              <p>完成进度</p>
              <Progress size="small" percent={30} />
            </Col>
            <Col span={8}>
              <p>今日数量</p>
              <Progress size="small" percent={75 / 100 * 0.01} format={() => '75/100'} />
            </Col>
            <Col span={8}>
              <p>打卡天数</p>
              <p style={{ color: '#52c41a' }}>75 Days</p>
            </Col>
          </Row>
        </div>
        <TaskTableList />
      </div >
    );
  }
}
