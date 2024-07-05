// declare variables to import user-specific information from .env file

const clusterName = import.meta.env.VITE_CLUSTERNAME;
const clusterIP = import.meta.env.VITE_CLUSTERIP;


function pickPanels(clusterIP, clusterName, viewPanels) {
  if (clusterIP.includes("localhost")) {
    viewPanels = [2, 3, 5, 6, 7, 8]
    urls = []
    for (panel in viewPanels) {
      urls.push(`http://${clusterIP}/d/${clusterName}/node-exporter-nodes?orgId=1&refresh=30s&viewPanel=${panel}`)
    }
    return urls
  }

  viewPanels = [32, 4, 24, 28, 30, 6]
  urls = []
  for (panel in viewPanels) {
    urls.push(`http://${clusterIP}/d/${clusterName}/kubernetes-cluster-monitoring-via-prometheus?orgId=1&refresh=10s&from=1680211308893&to=1680212208893&viewPanel=${panel}`)
  }
  return urls;
}

dashboardURLs = pickPanels(clusterIP, clusterName, viewPanels)

export { dashboardURLs };
