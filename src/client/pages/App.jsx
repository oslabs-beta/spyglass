import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import ClusterMetricsDashboard from '../components/dashboards/ClusterMetricsDashboard';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <ClusterMetricsDashboard />
    </div>
  );
}

export default App;
