import React from 'react';
import { Tag, Button, Progress } from 'antd';
interface IProps {
  percent: number;
  decline: (key: string) => void;
  increase: (key: string) => void;
}

export function getColumns(props: IProps) {
  const { percent, decline, increase } = props;
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
      title: '进度',
      key: 'progress',
      dataIndex: 'progress',
      render: (_: any, { key }: any) => (
        <>
          <Progress percent={percent} size="small" />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            <Button icon="minus" onClick={() => decline(key)} size="small" />
            <Button icon="plus" onClick={() => increase(key)} size="small" />
          </div>
        </>
      ),
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
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
      dataIndex: 'action',
      render: (_: any, { status }: any) => status === 'doing' ? <a>完成</a> : <span style={{ color: '#87D068' }}>已完成</span>
    }
  ];
  return columns;
}