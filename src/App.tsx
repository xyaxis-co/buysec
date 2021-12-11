import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './ui/header/header';
import Topbar from './ui/filters/topbar';
import Signin from './ui/auth/signin';
import Carasoul from './ui/components/carasoul';
import Product from './ui/pages/product/product';

const  App: React.FC<any> = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Topbar />
            <Carasoul page="homepage" width="1500" height="475" />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Signin />
          </>
        } />
        <Route path="/product" element={
          <>
            <Product />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
