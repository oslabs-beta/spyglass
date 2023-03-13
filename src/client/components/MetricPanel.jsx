export function MetricPanel() {
  return (
    <div className="metric-panel">
      <iframe
        src="http://localhost:8080/d-solo/6581e46e4e5c7ba40a07646395ef7b23/kubernetes-compute-resources-pod?orgId=1&refresh=10s&var-datasource=default&var-cluster=&var-namespace=kube-prometheus-stack&var-pod=prometheus-kube-prometheus-stack-prometheus-0&tab=query&from=1678567723432&to=1678571323432&panelId=1"
        width="450"
        height="200"
        frameborder="0"
      ></iframe>
    </div>
  );
}
