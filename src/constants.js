// array of urls for local cluster (minikube) metrics panel
const localDashboardURLs = [
  'http://localhost:8000/d/RfL_sdf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=2',
  'http://localhost:8000/d/RfL_sdf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=3',
  'http://localhost:8000/d/RfL_sdf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=5',
  'http://localhost:8000/d/RfL_sdf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=6',
  'http://localhost:8000/d/RfL_sdf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=7',
  'http://localhost:8000/d/RfL_sdf4z/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=8'
];

// array of urls for cloud cluster on AWS
const cloudDashboardURLs = [
  'http://aefc1187804224b2389464585a69932b-1354669704.us-west-2.elb.amazonaws.com/d-solo/DtgSFtBVk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688700219&to=1679689600219&panelId=6',
  'http://aefc1187804224b2389464585a69932b-1354669704.us-west-2.elb.amazonaws.com/d-solo/DtgSFtBVk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688882557&to=1679689782557&panelId=24',
  'http://aefc1187804224b2389464585a69932b-1354669704.us-west-2.elb.amazonaws.com/d-solo/DtgSFtBVk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688942902&to=1679689842902&panelId=27',
  'http://aefc1187804224b2389464585a69932b-1354669704.us-west-2.elb.amazonaws.com/d-solo/DtgSFtBVk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679688989408&to=1679689889408&panelId=28',
  'http://aefc1187804224b2389464585a69932b-1354669704.us-west-2.elb.amazonaws.com/d-solo/DtgSFtBVk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679689057884&to=1679689957884&panelId=28',
  'http://aefc1187804224b2389464585a69932b-1354669704.us-west-2.elb.amazonaws.com/d-solo/DtgSFtBVk/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1679689106850&to=1679690006850&panelId=30'
];
export { localDashboardURLs, cloudDashboardURLs };
