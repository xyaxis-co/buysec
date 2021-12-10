import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './ui/header/header';
import Topbar from './ui/filters/topbar';
import Signin from './ui/auth/signin';
import Carasoul from './ui/components/carasoul';

const  App: React.FC<any> = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Topbar />
            <Carasoul />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Signin />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
