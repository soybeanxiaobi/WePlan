import React from 'react';
import { Alert, Card, Badge } from 'antd';
import { TASK_CONFIG } from './constants';
import CardItem from './CardItem';
import styles from './index.less';



export default class Task extends React.Component {
  private title = (name: string, intro: string, path: string) => (
    <>
      <h1>{name}</h1>
      <div className={styles.desc}>
        <span>{intro}</span>
        <span className={styles.path}>{path}</span>
      </div>
    </>
  )
  public render() {
    return (
      <div className={styles.taskWrap}>
        <Alert message="Warning" type="warning" showIcon />
        <div className={styles.taskTitle}>
          <Badge status="warning" />
          <h1 style={{ display: 'inline-block' }}>任务面板</h1>
        </div>
        {
          TASK_CONFIG.map(({ title, desc, path }) => (
            <Card title={this.title(title, desc, path)} size="small">
              <CardItem path={path} />
            </Card>
          ))
        }
      </div>
    );
  }
};