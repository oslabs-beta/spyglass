function MetricPanel({ url }) {
  return (
    <div className="metric-panel">
      <iframe src={url} width="600" height="400"></iframe>
    </div>
  );
}

export default MetricPanel;
