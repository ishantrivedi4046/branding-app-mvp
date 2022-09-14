import { Table } from 'antd';
import { ADMIN_TABLE_COLUMNS } from 'constants/components/admin-table/admin-table.config';
import '../../styles/component/admin-table/admin-table.styles.scss';
import React from 'react';
import { DUMMY_DATA } from 'data';
import { ExpandableConfig } from 'antd/lib/table/interface';

const AdminTableComponent: React.FC = () => {
  const expandableRowConfig: ExpandableConfig<any> = {
    expandedRowRender: (record) => record.name,
    expandRowByClick: true,
    columnWidth: '1%',
    showExpandColumn: false,
  };

  return (
    <Table
      columns={ADMIN_TABLE_COLUMNS}
      className='admin-table'
      dataSource={DUMMY_DATA}
      expandable={expandableRowConfig}
    />
  );
};

export default AdminTableComponent;
