import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MetricPanel from '../components/MetricPanel';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      {/* <MetricPanel /> */}
    </div>
  );
}

export default App;
