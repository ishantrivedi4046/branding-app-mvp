import { FilterFilled } from '@ant-design/icons';
import { Space, Radio, Button } from 'antd';
import { ADMIN_TABLE_COLUMNS } from 'constants/components/admin-table/admin-table.config';
import React, { useMemo, useState } from 'react';
import '../../styles/component/admin-table/admin-table-filters.styles.scss';
import { get } from 'lodash';

interface AdminTableFiltersProps {
  totalRecords: number;
  filters: Record<string, any>;
  onFiltersChange: (key: string, value: string | number) => void;
  onClearAllFilters: () => void;
}

const AdminTableFiltersComponent: React.FC<AdminTableFiltersProps> = ({
  totalRecords,
  filters,
  onClearAllFilters,
  onFiltersChange,
}) => {
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const handleFiltersToggle = () => setOpenFilters((p) => !p);
  const filtersColumns = useMemo(
    () => ADMIN_TABLE_COLUMNS.filter((column) => !!column.filterKey),
    []
  );
  return (
    <div className='table-filters-container'>
      <div className='table-filters-container__header'>
        <div className='title'>Influencers</div>
        <div className='subtitle'>
          <span>{`Total : ${totalRecords}`}</span>
          <Space onClick={handleFiltersToggle} className='filters-toggle'>
            <FilterFilled />
            <span>{!openFilters ? 'Filter' : 'Close'}</span>
          </Space>
        </div>
      </div>
      <div className={`content ${openFilters ? '' : 'content-closed'}`}>
        <div className='filters-container'>
          {filtersColumns.map((col) => (
            <div className='filter' key={col.filterKey}>
              <div className='title'>{col.filterLable}</div>
              <Radio.Group
                options={col.options}
                key={col.filterKey}
                value={get(filters, [col.filterKey ?? ''], '')}
                onChange={(e) =>
                  onFiltersChange(col.filterKey ?? '', e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <div className='clear-all'>
          <Button type='text' onClick={onClearAllFilters}>
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminTableFiltersComponent;
