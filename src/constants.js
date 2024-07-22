// declare variables to import user-specific information from .env file
const clusterIP = import.meta.env.VITE_CLUSTERIP;
const clusterName = import.meta.env.VITE_CLUSTERNAME;

//if clusterIP has localhost return
function createDashURLs(ip, name) {
  const urls = [];
  if (ip.includes('localhost')) {
    // array of urls for local cluster (Minikube) metrics panels from Grafana
    // e.g. http://localhost:8000/d/IMOt5Yf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=2
    const localPanels = ['2', '3', '5', '6', '7', '8'];
    for (const panel of localPanels) {
      urls.push(
        `http://${ip}/d/${name}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=${panel}`
      );
    }
  } else {
    // array of urls for cloud cluster (AWS) metrics panels from Grafana
    // e.g. http://a5f23f08f01e34e6c883489e8cfef487-101927145.us-east-1.elb.amazonaws.com/d/bgPQC9f4z/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680212302956&to=1680213202956&viewPanel=32
    const cloudPanels = ['32', '4', '24', '28', '30', '6'];
    for (const panel of cloudPanels) {
      urls.push(
        `http://${ip}/d/${name}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211308893&to=1680212208893&viewPanel=${panel}`
      );
    }
  }
  return urls;
}

const dashboardURLs = createDashURLs(clusterIP, clusterName);

export { dashboardURLs };
