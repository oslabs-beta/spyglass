function MetricPanel({ url }) {
  return (
    <div className="metric-panel">
      <iframe src={url} width="500" height="350"></iframe>
    </div>
  );
}

export default MetricPanel;
