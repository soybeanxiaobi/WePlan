import * as React from 'react';
import { connect } from 'dva';
import styles from '../index.less';
import { Progress, Row, Col, Statistic } from 'antd';
import { ConnectState } from '@/models/connect';
export interface IProps {
  tasks: {
    panel: any,
  };
  dispatch?: any;
  loading?: boolean;
}

@connect(({ tasks, loading }: ConnectState) => ({
  tasks,
  loading: loading.effects['tasks/fetchPanel'],
}))
export default class Panel extends React.Component<IProps> {
  public componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'tasks/fetchPanel',
    })
  }
  public render() {
    const { loading, tasks: { panel = {} } } = this.props;
    const { progress = {}, doneNum = {}, clockDay = {} } = panel;
    return (
      <div className={styles.overview}>
        <h1>数据看版</h1>
        <Row className={styles.overviewProgress}>
          <Col span={8}>
            <p>完成进度</p>
            {loading ? '加载中...' : <Progress size="small" percent={progress.current || 0} format={() => `${progress.current || 0}/100`} />}
          </Col>
          <Col span={8}>
            <p>今日数量</p>
            {loading ? '加载中...' : <Statistic value={doneNum.current || 0} suffix="/ 100" />}
          </Col>
          <Col span={8}>
            <p>打卡天数</p>
            {loading ? '加载中...' : <p style={{ color: '#52c41a', fontSize: 24 }}>{clockDay.num || 0}</p>}
          </Col>
        </Row>
      </div>
    );
  }
}
