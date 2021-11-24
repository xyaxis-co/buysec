import React from 'react';
import Header from './ui/header/Header';
import Topbar from './ui/filters/Topbar';

const  App: React.FC<any> = () => {
  return (
    <div className="h-screen">
      <Header />
      <Topbar />
    </div>
  );
}

export default App;
