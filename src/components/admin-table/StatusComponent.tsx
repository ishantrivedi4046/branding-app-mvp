import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import {
  StatusOptionKeys,
  StatusOptionToColorMapping,
  STATUS_OPTIONS,
} from 'constants/components/admin-table/status.constant';
import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateInfluencerStatus } from 'redux/actions/influencer.action';

interface StatusComponentProps {
  status: StatusOptionKeys;
  influencerId: string;
}

const StatusComponent: React.FC<StatusComponentProps> = (
  props: StatusComponentProps
) => {
  const { status, influencerId } = props;
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleOpenChange = (open: boolean) => {
    setDropdownOpen(open);
  };

  const renderMenu = useMemo(
    () => (
      <Menu>
        {STATUS_OPTIONS.map((option) => (
          <Menu.Item
            key={option.value}
            onClick={({ domEvent }) => {
              domEvent.stopPropagation();
              dispatch(
                updateInfluencerStatus({
                  id: influencerId,
                  status: option.value,
                })
              );
              handleOpenChange(false);
            }}
          >
            {option.label}
          </Menu.Item>
        ))}
      </Menu>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [influencerId]
  );
  const label = useMemo(
    () => STATUS_OPTIONS.find((option) => option.value === status)?.label,
    [status]
  );

  return (
    <Dropdown
      overlay={renderMenu}
      trigger={['click']}
      placement='bottomCenter'
      onOpenChange={handleOpenChange}
    >
      <Space
        className='status-selection'
        style={{ backgroundColor: StatusOptionToColorMapping[status] }}
        onClick={(e) => e.stopPropagation()}
      >
        {label}
        {dropdownOpen ? <UpOutlined /> : <DownOutlined />}
      </Space>
    </Dropdown>
  );
};

export default React.memo(StatusComponent);
