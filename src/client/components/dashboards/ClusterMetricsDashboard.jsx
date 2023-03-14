import MetricPanel from '../MetricPanel';
import dashboardURLs from '../../../constants';

function ClusterMetricsDashboard() {
  const visualizers = dashboardURLs.map((url) => (
    <MetricPanel url={url} key={url} />
  ));
  return <div>{visualizers}</div>;
}
export default ClusterMetricsDashboard;
