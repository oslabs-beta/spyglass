import MetricPanel from '../MetricPanel';
import dashboardURLs from '../../../constants';
import Grid from '@mui/material/Grid';
import { grid } from '@mui/system';

function ClusterMetricsDashboard() {
  const panels = dashboardURLs.map((url) => (
    <Grid>
      <MetricPanel url={url} key={url} />
    </Grid>
  ));
  return (
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
