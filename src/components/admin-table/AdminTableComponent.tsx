import { Table } from 'antd';
import { ADMIN_TABLE_COLUMNS } from 'constants/components/admin-table/admin-table.config';
import '../../styles/component/admin-table/admin-table.styles.scss';
import React, { useCallback, useMemo } from 'react';
import {
  ExpandableConfig,
  TablePaginationConfig,
} from 'antd/lib/table/interface';
import { Influencer } from 'models/entities/Influencer';
import AdminTableExpandedRowComponent from './AdminTableExpandedRowComponent';

interface AdminTableProps {
  loading: boolean;
  influencers: Influencer[];
}

const AdminTableComponent: React.FC<AdminTableProps> = ({
  loading,
  influencers,
}) => {
  const renderExpandedRow = useCallback(
    (record: Influencer) => (
      <AdminTableExpandedRowComponent influencer={record} />
    ),
    []
  );

  const expandableRowConfig: ExpandableConfig<Influencer> = {
    expandedRowRender: renderExpandedRow,
    expandRowByClick: true,
    columnWidth: '1%',
    showExpandColumn: false,
  };

  const renderPaginationNext = useMemo(
    () => <span className='pagination-next'>Next</span>,
    []
  );

  const paginationConfig: TablePaginationConfig = useMemo(
    () => ({
      position: ['bottomLeft'],
      size: 'small',
      pageSize: 10,
      className: 'custom-pagination',
      hideOnSinglePage: true,
      itemRender: (_, type, originalElement) => {
        if (type === 'prev') return undefined;
        if (type === 'next') return renderPaginationNext;
        return originalElement;
      },
    }),
    [renderPaginationNext]
  );

  const filteredColumns = useMemo(
    () => ADMIN_TABLE_COLUMNS.filter((col) => !col.hidden),
    []
  );

  return (
    <Table
      rowKey='id'
      loading={loading}
      columns={filteredColumns}
      className='admin-table'
      dataSource={influencers}
      expandable={expandableRowConfig}
      pagination={paginationConfig}
    />
  );
};

export default AdminTableComponent;
