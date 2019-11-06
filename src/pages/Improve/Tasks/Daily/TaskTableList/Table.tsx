import * as React from 'react';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { Table, message } from 'antd';
import { getColumns } from './columns';

interface IFProps {
  key?: string;
  type: string;

}
interface IOwnProps {
  tasks?: {
    list: any[],
  };
  dispatch?: any;
  loading?: boolean;
}
type IProps = IFProps & IOwnProps;
@connect(({ tasks, loading }: ConnectState) => ({
  tasks,
  loading: loading.effects['tasks/fetchTask'],
}))
export default class TaskTable extends React.Component<IProps> {
  public state = {
    percent: 0,
  }
  public componentDidMount() {
    const { type, dispatch } = this.props;
    dispatch({
      type: 'tasks/fetchTask',
      payload: {
        type,
      },
    })
  }
  private increaseProgress = (key: string) => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    message.success(key);
    this.setState({ percent });
  };

  private declineProgress = (key: string) => {
    message.success(key);
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  private getColumnsProps = () => {
    return {
      percent: this.state.percent,
      decline: this.declineProgress,
      increase: this.increaseProgress,
    };
  }
  public render() {
    const { type, tasks, loading } = this.props;
    //@ts-ignore
    const { list } = tasks;
    return (
      <Table
        bordered
        loading={loading}
        dataSource={list[type]}
        columns={getColumns(this.getColumnsProps())}
        title={() => type.toLocaleUpperCase()}
      />
    );
  }
}
