import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MetricPanel from '../components/MetricPanel';
import Box from '@mui/material/Box';
import ClusterMetricsDashboard from '../components/dashboards/ClusterMetricsDashboard';
import CostAnalysisDashboard from '../components/dashboards/CostAnalysisDashboard';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Box className="main">
        <Routes>
          <Route path="/cluster" element={<ClusterMetricsDashboard />} />
          <Route path="/cost" element={<CostAnalysisDashboard />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
