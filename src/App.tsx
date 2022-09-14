import Admin from 'containers/Admin';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import store from 'redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Navigate replace to='/admin' />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
