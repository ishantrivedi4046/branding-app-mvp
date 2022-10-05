import Admin from 'containers/Admin';
import DashboardContainer from 'containers/DashboardContainer';
import SignInContainer from 'containers/SignInContainer';
import SignUpContainer from 'containers/SignUpContainer';
import LandingContainer from 'containers/LandingContainer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import store from 'redux/store';
import LogoutContainer from 'containers/LogoutContainer';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignInContainer />} />
        <Route path='/signup' element={<SignUpContainer />} />
        <Route path='/home' element={<LandingContainer />} />
        <Route path='/success' element={<DashboardContainer />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/logout' element={<LogoutContainer />} />
        <Route path='/' element={<Navigate replace to='/home' />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
