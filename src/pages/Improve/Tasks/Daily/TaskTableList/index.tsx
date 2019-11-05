import * as React from 'react';
import { TASK_TABLE_TYPE } from '../constants';
import TaskTable from './Table';

export interface IProps {
}


export default () => {
  return (
    <>
      {
        TASK_TABLE_TYPE.map(type => (
          <TaskTable key={type + new Date().getTime()} type={type} />
        ))
      }
    </>
  );
}
