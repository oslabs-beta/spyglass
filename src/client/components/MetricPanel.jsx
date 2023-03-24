function MetricPanel({ url }) {
  return (
    // display metrics retrieved from Grafana in an iframe
    <div className="metric-panel">
      <iframe src={url} width="600" height="400"></iframe>
    </div>
  );
}

export default MetricPanel;
