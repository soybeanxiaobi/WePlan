interface ITASK_CONFIG {
  /** local: 本地文件 move: 移动硬盘 */
  type: 'local' | 'move';
  title: string;
  path: string;
  desc: string;
}
export const TASK_CONFIG: ITASK_CONFIG[] = [
  {
    type: 'local',
    title: '去哪儿旅游-Hooks实现',
    desc: 'Reactv16.0系列课程',
    path: '/Users/chenxiaobin/Youzan/daily-work/前端教程/去哪儿旅游-Hooks实现', // 去哪儿hooks
  },
  {
    type: 'move',
    title: '智能社高级JS教程',
    desc: '高级语法教程',
    path: '/Users/chenxiaobin/Youzan/daily-work/前端教程/去哪儿旅游-Hooks实现', // 去哪儿hooks
  },
];
