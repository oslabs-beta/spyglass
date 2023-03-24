function MetricPanel({ url }) {
  return (
    // display metrics retrieved from Grafana in an iframe
    <div className="metric-panel">
      <iframe src={url} width="500" height="350"></iframe>
    </div>
  );
}

export default MetricPanel;
