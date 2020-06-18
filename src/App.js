import React from 'react';
import './App.css';
import MainLayout from './layouts/mainLayout'
import Routes from './routes';

function App() {
  return (
    <div className="App">
      {/* <MainLayout> */}
        <Routes layout={MainLayout}/>
      {/* </MainLayout> */}
    </div>
  );
}

export default App;
