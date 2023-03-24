import MetricPanel from '../MetricPanel';
function ClusterVisualizerDashboard() {
  const visualURL = 'http://localhost:9000/';
  return (
    <Grid sx={{ boxShadow: 5 }} key={idx}>
      <MetricPanel url={visualURL} />
    </Grid>
  );
}
export default ClusterVisualizerDashboard;
