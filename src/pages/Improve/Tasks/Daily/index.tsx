import * as React from 'react';
import styles from './index.less';
import TaskTableList from './TaskTableList';
import Panel from './Panel';

export default  () => {
  // ts-ignore
  return (
    <div className={styles.dailyWarp}>
      <Panel />
      <TaskTableList />
    </div >
  );
}
