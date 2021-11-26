import React from 'react';
import Header from './ui/header/Header';
// import Topbar from './ui/filters/Topbar';
import Signin from './ui/auth/signin';
// import Loading from './ui/extras/Loading';

const  App: React.FC<any> = () => {
  return (
    <div className="h-screen">
      <Header />
      {/* <Topbar /> */}
      <Signin />
      {/* <Loading /> */}
    </div>
  );
}

export default App;
