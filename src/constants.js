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
// e.g. http://aefc1187804224b2389464585a69932b-1354669704.us-west-2.elb.amazonaws.com/d-solo/DtgSFtBVk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688700219&to=1679689600219&panelId=6
const cloudDashboardURLs = [
  `http://${cloudClusterIP}/d-solo/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688700219&to=1679689600219&panelId=6`,
  `http://${cloudClusterIP}/d-solo/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688882557&to=1679689782557&panelId=24`,
  `http://${cloudClusterIP}/d-solo/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688942902&to=1679689842902&panelId=27`,
  `http://${cloudClusterIP}/d-solo/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688989408&to=1679689889408&panelId=28`,
  `http://${cloudClusterIP}/d-solo/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679689057884&to=1679689957884&panelId=28`,
  `http://${cloudClusterIP}/d-solo/${cloudClusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679689106850&to=1679690006850&panelId=30`
];
export { localDashboardURLs, cloudDashboardURLs };
