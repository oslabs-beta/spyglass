import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Box from '@mui/material/Box';
import ClusterMetricsDashboard from '../components/dashboards/ClusterMetricsDashboard';
import CostAnalysisDashboard from '../components/dashboards/CostAnalysisDashboard';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    // display app with navbar, sidebar, and routes to dashboards
    <div className="App">
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

export default App;
