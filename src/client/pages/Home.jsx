import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Box from '@mui/material/Box';
import ClusterMetricsDashboard from '../components/dashboards/ClusterMetricsDashboard';
import CostAnalysisDashboard from '../components/dashboards/CostAnalysisDashboard';
// import CloudMetricsDashboard from '../components/dashboards/CloudMetricsDashboard';
import ClusterVisualizerDashboard from '../components/dashboards/ClusterVisualizerDashboard';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';

function Home() {
  return (
    <div className="home">
      <NavBar />
      <SideBar />
      <Box className="main">
        <Routes>
          <Route path="/visual" element={<ClusterVisualizerDashboard />} />
          <Route path="/cost" element={<CostAnalysisDashboard />} />
          {/* <Route path="/cloud" element={<CloudMetricsDashboard />} /> */}
          <Route path="/" element={<ClusterMetricsDashboard />} />
        </Routes>
      </Box>
    </div>
  );
}

export default Home;
