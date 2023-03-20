import MetricPanel from '../MetricPanel';
import dashboardURLs from '../../../constants';
import Grid from '@mui/material/Grid';

function ClusterMetricsDashboard() {
  const panels = dashboardURLs.map((url) => (
    <Grid sx={{ boxShadow: 5 }}>
      <MetricPanel url={url} key={url} />
    </Grid>
  ));
  return (
    <Grid
      className="clusterMetricsDashboard"
      container
      direction="row"
      rowGap={5}
      columnGap={5}
      justifyContent="center"
      alignItems="center"
    >
      {panels}
    </Grid>
  );
}
export default ClusterMetricsDashboard;
