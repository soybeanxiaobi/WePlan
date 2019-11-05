import * as React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { ConnectState } from '@/models/connect';
import styles from './CardItem.less';
const CardGrid = Card.Grid as any;

export interface IProps {
  path: string;
  courses?: {
    list: string[];
  };
  dispatch?: any;
}
@connect(({ courses, loading }: ConnectState) => ({
  courses,
  submitting: loading.effects['courses/fetchFolder'],
}))
export default class CardItem extends React.Component<IProps> {
  public componentDidMount() {
    const { dispatch, path } = this.props;
    dispatch({
      type: 'courses/fetchFolder',
      payload: {
        path,
      },
    })
  }
  private handleCoursesClick = (fileName: string) => {
    const { path, dispatch } = this.props;
    const file = `${path}/${fileName}`;
    dispatch({
      type: 'courses/openFileWithDefault',
      payload: {
        file,
      }
    })
  }

  public render() {
    const { courses } = this.props;
    // @ts-ignore
    const { list } = courses;
    return (
      <div className={styles.cardItemWrap}>
        {
          list.map((item: string) => {
            if (item.includes('mp4')) {
              return <CardGrid key={item} onClick={() => this.handleCoursesClick(item)}>{item}</CardGrid>
            }
            return ''
          })
        }
      </div>
    );
  }
}
