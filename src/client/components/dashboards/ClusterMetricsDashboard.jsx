import MetricPanel from '../MetricPanel';
import { localDashboardURLs } from '../../../constants';
import Grid from '@mui/material/Grid';

function ClusterMetricsDashboard() {
  const panels = localDashboardURLs.map((url, idx) => (
    <Grid sx={{ boxShadow: 5 }} key={idx}>
      <MetricPanel url={url} />
    </Grid>
  ));
  return (
    // display panels for a local cluster in a grid container
    <Grid
      className="clusterMetricsDashboard"
      container
      direction="row"
      rowGap={2}
      columnGap={2}
      justifyContent="center"
      alignItems="center"
    >
      {panels}
    </Grid>
  );
}
export default ClusterMetricsDashboard;
