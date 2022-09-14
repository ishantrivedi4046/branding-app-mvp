import AdminTableComponent from 'components/admin-table/AdminTableComponent';
import AdminTableFiltersComponent from 'components/admin-table/AdminTableFiltersComponent';
import React from 'react';
import '../styles/container/admin-table-container.styles.scss';

const AdminTableContainer: React.FC = () => (
  <div className='admin-table-container'>
    {/** Giving a dummy value to total records for now */}
    <AdminTableFiltersComponent totalRecords={200} />
    <AdminTableComponent />
  </div>
);

export default AdminTableContainer;
