import React from 'react';
import { Avatar, Icon, Menu } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';


export default class AvatarDropdown extends React.Component {
  render(): React.ReactNode {
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]}>
        <Menu.Item key="center">
          <Icon type="user" />
          <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );

    return (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} alt="avatar">X</Avatar>
          <span className={styles.name}>xiaobe</span>
        </span>
      </HeaderDropdown>
    )
  }
}
