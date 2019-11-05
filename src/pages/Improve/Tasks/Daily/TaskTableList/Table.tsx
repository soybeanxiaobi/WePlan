import * as React from 'react';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { Tag, Table } from 'antd';
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
const columns = [
  {
    key: 'task',
    title: '任务',
    dataIndex: 'task',
  },
  {
    key: 'descOrNum',
    title: '描述/数量',
    dataIndex: 'descOrNum',
  },
  {
    key: 'execTime',
    dataIndex: 'execTime',
    title: '执行时间段/次序',
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: '状态',
    render: (status: string) => {
      if (status === 'doing') {
        return <Tag color="#108ee9">PENDING</Tag>
      } else {
        return <Tag color="#87d068">DONE</Tag>
      }
    }
  },
  {
    key: 'action',
    title: '操作',
    render: () => <a>完成</a>
  }
];
@connect(({ tasks, loading }: ConnectState) => ({
  tasks,
  loading: loading.effects['tasks/fetchTask'],
}))
export default class TaskTable extends React.Component<IProps> {
  public componentDidMount() {
    const { type, dispatch } = this.props;
    dispatch({
      type: 'tasks/fetchTask',
      payload: {
        type,
      },
    })
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
        columns={columns}
        title={() => type.toLocaleUpperCase()}
      />
    );
  }
}
