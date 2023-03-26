import MetricPanel from '../MetricPanel';
import { cloudDashboardURLs } from '../../../constants';
import Grid from '@mui/material/Grid';

function CloudMetricsDashboard() {
  const panels = cloudDashboardURLs.map((url, idx) => (
    <Grid sx={{ boxShadow: 5 }} key={idx}>
      <MetricPanel url={url} />
    </Grid>
  ));
  return (
    // display panels in a grid container
    <Grid
      className="cloudMetricsDashboard"
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

export default CloudMetricsDashboard;
