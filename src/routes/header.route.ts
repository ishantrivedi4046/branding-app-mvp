import { BasicOptionTypes } from 'types/components/admin-table/AdminTable.type';

export const LANDING_HEADER_ROUTE_LIST: Array<BasicOptionTypes<string>> = [
  { label: 'Sign up', value: '/signup' },
  { label: 'Sign in', value: '/signin' },
];

export const DASHBOARD_HEADER_ROUTE_LIST: Array<BasicOptionTypes<string>> = [
  { label: 'Home', value: '/home' },
];
export const ADMIN_HEADER_ROUTE_LIST: Array<BasicOptionTypes<string>> = [
  { label: 'LOGOUT', value: '/logout' },
];
