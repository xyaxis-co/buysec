import React from 'react';
import Header from './ui/header/header';
import Topbar from './ui/filters/topbar';
import Signin from './ui/auth/signin';
import Loading from './ui/extras/loading';
import Address from './ui/pages/address';

const  App: React.FC<any> = () => {
  return (
    <div className="h-screen">
      <Header />
      <Address />
      <Topbar />
      {/* <Signin /> */}
      {/* <Loading /> */}
    </div>
  );
}

export default App;
