import React, { useState } from 'react';
import { Descriptions, Badge, Checkbox, Button, Modal } from 'antd';
import { PREPARE_PLACE, EFFECT_PLACE_COL_ONE, EFFECT_PLACE_COL_TWO } from './constants';
import styles from './index.less';


export default () => {
  const [checked, setChecked] = useState(false);
  const handleOpenModelAgreement = () => {
    Modal.info({
      title: '麻豆守则',
      maskClosable: true,
      content: (
        <div>
          <p><Badge status="processing" />夜景最佳机位是大型灯箱广告、橱窗灯光，拍摄需要不断移步</p>
          <p><Badge status="processing" />拍摄过程会进行引导，自己发挥为佳，就当一次逛gai</p>
          <p><Badge status="processing" />天气冷，多带点衣服</p>
          <p><Badge status="error" />不能殴打摄影师</p>
        </div>
      ),
      onOk() {
        setChecked(true);
      },
    });
  }
  const handleGetReward = () => {
    Modal.success({
      title: '任选一',
      maskClosable: true,
      content: (
        <div>
          <p>请看一次开心麻花话剧《窗前明月光》，买票券*1</p>
          <p>请用一次网红餐厅，买单券*1</p>
          <p>...</p>
        </div>
      ),
      onOk() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 1000);
        })
      },
    });
  }
  return (
    <div className={styles.photographyWrap}>
      <Descriptions title="前期准备" bordered>
        <Descriptions.Item label="主题">夜景人像</Descriptions.Item>
        <Descriptions.Item label="天气">多云，6°~17°，预计拍摄温度12°</Descriptions.Item>
        <Descriptions.Item label="机位点">西城广场小区天台、西溪天堂、更多机位点等待开启</Descriptions.Item>
        <Descriptions.Item label="开始时间">12-14 16:30:00</Descriptions.Item>
        <Descriptions.Item label="结束时间">12-14 20:00:00</Descriptions.Item>
        <Descriptions.Item label="拍摄时间">2.5h</Descriptions.Item>
        <Descriptions.Item label="道具&设备" span={3}>
          <Badge status="processing" />
          花、仙女棒、三脚架、闪光灯 奶茶、零食  环闪、LED灯(选)
        </Descriptions.Item>
        {/* <Descriptions.Item label="环境"></Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item> */}
        <Descriptions.Item label="备注">
          服装搭配建议：尽量选择如红色等鲜艳色（非绝对）<br />
          西溪天堂夜景出片率不稳定<br />
          西城广场小区天台周围是矮楼，晚上不亮灯<br />
        </Descriptions.Item>
      </Descriptions>
      <div className="ant-descriptions-title" style={{ marginTop: 20 }}>踩点采样</div>
      <div className={styles.sample}>
        {
          PREPARE_PLACE.map(({ width, src, info }) => (
            <div className={styles.list} key={info}>
              <img src={src} width={width} />
              <p>{info}</p>
            </div>
          ))
        }
      </div>
      <div className="ant-descriptions-title" style={{ marginTop: 20 }}>成片参考</div>
      <div className={styles.sample}>
        {
          EFFECT_PLACE_COL_ONE.map(({ width, src }) => (
            <div className={styles.list} key={src}>
              <img src={src} width={width} />
            </div>
          ))
        }
      </div>
      <div className={styles.sample} style={{ marginTop: 48, marginBottom: 28 }}>
        {
          EFFECT_PLACE_COL_TWO.map(({ width, src }) => (
            <div className={styles.list} key={src}>
              <img src={src} width={width} />
            </div>
          ))
        }
      </div>
      <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>
        我已同意
      </Checkbox>
      <span style={{ color: '#155bd4', cursor: 'pointer' }} onClick={handleOpenModelAgreement}>
        《麻豆约拍守则》
      </span>
      <div className={styles.footer}>
        <Button type="primary" disabled={!checked} onClick={handleGetReward}>领取奖励</Button>
      </div>
    </div>
  );
};
