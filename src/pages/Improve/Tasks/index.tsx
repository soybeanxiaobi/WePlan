import React from 'react';
import { Tabs } from 'antd';
import styles from './index.less';
import Daily from './Daily';
// interface IDailyCleanProps {
// }

const { TabPane } = Tabs;

const DailyClean = () => {
  return (
    <div className={styles.taskPanel}>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="日常" key="1">
          <Daily />
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
