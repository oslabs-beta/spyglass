import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Box from '@mui/material/Box';
import ClusterMetricsDashboard from '../components/dashboards/ClusterMetricsDashboard';
import CostAnalysisDashboard from '../components/dashboards/CostAnalysisDashboard';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';

function Home() {
  return (
    <div className="home">
      <NavBar />
      <SideBar />
      <Box className="main">
        <Routes>
          <Route path="/cost" element={<CostAnalysisDashboard />} />
          <Route path="/" element={<ClusterMetricsDashboard />} />
        </Routes>
      </Box>
    </div>
  );
}

export default Home;
