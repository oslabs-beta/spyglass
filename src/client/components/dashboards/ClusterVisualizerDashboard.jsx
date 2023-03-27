function ClusterVisualizerDashboard() {
  const visualURL = 'http://localhost:9000/';
  return (
    // display graph nodes from Kubeview
    <div className="kubeviewContainer">
      <iframe src={visualURL} width="1500" height="800"></iframe>
    </div>
  );
}
export default ClusterVisualizerDashboard;
