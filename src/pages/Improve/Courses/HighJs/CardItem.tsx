import * as React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { ConnectState } from '@/models/connect';
import styles from './CardItem.less';
const CardGrid = Card.Grid as any;

export interface IProps {
  path: string;
  task?: {
    list: string[];
  };
  dispatch?: any;
}
@connect(({ task, loading }: ConnectState) => ({
  task: task,
  submitting: loading.effects['task/fetchTask'],
}))
export default class CardItem extends React.Component<IProps> {
  public componentDidMount() {
    const { dispatch, path } = this.props;
    dispatch({
      type: 'task/fetchTask',
      payload: {
        path,
      },
    })
  }
  private handleTaskClick = (fileName: string) => {
    const { path, dispatch } = this.props;
    const file = `${path}/${fileName}`;
    dispatch({
      type: 'task/openFileWithDefault',
      payload: {
        file,
      }
    })
  }

  public render() {
    const { task } = this.props;
    // @ts-ignore
    const { list } = task;
    return (
      <div className={styles.cardItemWrap}>
        {
          list.map((item: string) => {
            if (item.includes('mp4')) {
              return <CardGrid key={item} onClick={() => this.handleTaskClick(item)}>{item}</CardGrid>
            }
            return ''
          })
        }
      </div>
    );
  }
}
