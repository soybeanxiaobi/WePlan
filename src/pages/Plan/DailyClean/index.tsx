import React from 'react';
import { Tabs } from 'antd';
import styles from './index.scss';
import Task from './Task';
// interface IDailyCleanProps {
// }

const { TabPane } = Tabs;

const DailyClean = () => {
  return (
    <div className={styles.taskPanel}>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Tab 1" key="1">
          <Task />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DailyClean;
