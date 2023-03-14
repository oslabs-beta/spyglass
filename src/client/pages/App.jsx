import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MetricPanel from '../components/MetricPanel';
import ClusterMetricsDashboard from '../components/dashboards/ClusterMetricsDashboard';
import CostAnalysisDashboard from '../components/dashboards/CostAnalysisDashboard';
// import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      {/* <Routes>
        <Route path="/cluster" element={<ClusterMetricsDashboard />} />
        <Route path="/cost" element={<CostAnalysisDashboard />} />
      </Routes> */}
    </div>
  );
}

export default App;
