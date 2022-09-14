import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import {
  StatusOptionKeys,
  StatusOptionToColorMapping,
  STATUS_OPTIONS,
} from 'constants/components/admin-table/status.constant';
import React, { useMemo } from 'react';

interface StatusComponentProps {
  status: StatusOptionKeys;
}

const StatusComponent: React.FC<StatusComponentProps> = (
  props: StatusComponentProps
) => {
  const { status } = props;
  const renderMenu = useMemo(
    () => (
      <Menu>
        {STATUS_OPTIONS.map((option) => (
          <Menu.Item key={option.value}>{option.label}</Menu.Item>
        ))}
      </Menu>
    ),
    []
  );
  const label = useMemo(
    () => STATUS_OPTIONS.find((option) => option.value === status)?.label,
    [status]
  );

  return (
    <Dropdown overlay={renderMenu} trigger={['click']} placement='bottomCenter'>
      <Space
        className='status-selection'
        style={{ backgroundColor: StatusOptionToColorMapping[status] }}
      >
        {label}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default React.memo(StatusComponent);
