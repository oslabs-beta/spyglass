// declare variables to import user-specific information from .env file
const localClusterIP = import.meta.env.VITE_LOCALCLUSTERIP;
const localClusterName = import.meta.env.VITE_LOCALCLUSTERNAME;
const cloudClusterIP = import.meta.env.VITE_CLOUDCLUSTERIP;
const cloudClusterName = import.meta.env.VITE_CLOUDCLUSTERNAME;

// array of urls for local cluster (Minikube) metrics panels from Grafana
// e.g. http://localhost:8000/d/IMOt5Yf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=2
const localDashboardURLs = [
  `http://${localClusterIP}/d/${localClusterName}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=2`,
  `http://${localClusterIP}/d/${localClusterName}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=3`,
  `http://${localClusterIP}/d/${localClusterName}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=5`,
  `http://${localClusterIP}/d/${localClusterName}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=6`,
  `http://${localClusterIP}/d/${localClusterName}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=7`,
  `http://${localClusterIP}/d/${localClusterName}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=8`
];

// array of urls for cloud cluster (AWS) metrics panels from Grafana
// e.g. http://a5f23f08f01e34e6c883489e8cfef487-101927145.us-east-1.elb.amazonaws.com/d/bgPQC9f4z/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680212302956&to=1680213202956&viewPanel=32
const cloudDashboardURLs = [
  `http://${cloudClusterIP}/d/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211308893&to=1680212208893&viewPanel=32`,
  `http://${cloudClusterIP}/d/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211595011&to=1680212495011&viewPanel=4`,
  `http://${cloudClusterIP}/d/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211712351&to=1680212612351&viewPanel=24`,
  `http://${cloudClusterIP}/d/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211731333&to=1680212631333&viewPanel=28`,
  `http://${cloudClusterIP}/d/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211731333&to=1680212631333&viewPanel=30`,
  `http://${cloudClusterIP}/d/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211224252&to=1680212124252&viewPanel=6`
];

export { localDashboardURLs, cloudDashboardURLs };
