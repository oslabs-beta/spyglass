import MetricPanel from '../MetricPanel';
import dashboardURLs from '../../../constants';
import Grid from '@mui/material/Grid';

function ClusterMetricsDashboard() {
  const panels = dashboardURLs.map((url, idx) => (
    <Grid sx={{ boxShadow: 5 }} key={idx}>
      <MetricPanel url={url} />
    </Grid>
  ));
  return (
    // display panels in a grid container
    <Grid
      className="clusterMetricsDashboard"
      container
      direction="row"
      rowGap={10}
      columnGap={10}
      justifyContent="center"
      alignItems="center"
    >
      {panels}
    </Grid>
  );
}
export default ClusterMetricsDashboard;
