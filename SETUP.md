### Spyglass' Setup Instructions

Clone the Spyglass repo from GitHub to your local machine.

```
git clone https://github.com/oslabs-beta/spyglass.git
```

### Setup Instructions

To get started, you will need to have a Kubernetes cluster. If you are new to Kubernetes, we recommend that you create a simple single-node cluster on your machine using Minikube. 

Here are instructions
See documentation for Minikube at [link](https://minikube.sigs.k8s.io/docs/start/).

1. Install Docker 

2. Start your cluster 
```
minikube start 
```
<br/>

### Helm

Helm is a package manager for Kubernetes that allows you to easily install and manage applications in your Kubernetes cluster.

Install Helm by following the instructions at this [link](https://helm.sh/docs/intro/quickstart/).

<br/>

### Kube-Prometheus Stack

The kube-prometheus stack is a collection of applications for monitoring Kubernetes clusters. See documentation at &nbsp;[link](https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/README.md).

Begin by creating a new namespace in your cluster named ```monitoring```:

```
kubectl create namespace monitoring
```

Add the prometheus-community repo to Helm:

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

Install kube-prometheus stack:

```
helm install kubepromstack prometheus-community/kube-prometheus-stack --namespace=monitoring
```

<br/>


### OpenCost/KubeCost Community Version

OpenCost/KubeCost is a Kubernetes cost monitoring tool upon which VaaS's budget and forecasting features are built upon. See documentation at [link](https://docs.kubecost.com/).

```
helm install kubecost cost-analyzer \
--repo https://kubecost.github.io/cost-analyzer/ \
--namespace kubecost --create-namespace \
--set kubecostToken="Q3l0b25nMzMxQGdtYWlsLmNvbQ==xm343yadf98"
--set prometheus.nodeExporter.enabled=false \
--set prometheus.serviceAccounts.nodeExporter.create=false \
--set prometheus.kubeStateMetrics.enabled=false
```

<br/>

### KubeView
KubeView is a web-based UI that allows you to view the status of your Kubernetes cluster. See documentation at &nbsp;[link](https://artifacthub.io/packages/helm/kubeview/kubeview?modal=install).

```
helm repo add kubeview https://benc-uk.github.io/kubeview/charts
helm install my-kubeview kubeview/kubeview --version [CURRENT VERSION] --namespace=monitoring
```

_Note: replace [CURRENT VERSION] in the above command with the latest version by visiting KubeView's documentation._

<br/>

## Access and Port-Forwarding
Some components of ```kube-prometheus stack``` come with their own GUIs, which can be accessed via ```kubectl port-forward```.

<br/>

### Prometheus
      
```
kubectl -n monitoring port-forward svc/kubepromstack-kube-prometh-prometheus 30000:9090
```
Accessed via http://localhost:30000

<br/>

### Kube State Metrics

```
kubectl -n monitoring port-forward svc/kubepromstack-kube-state-metrics 30135:8080
```
Accessed via http://localhost:30135

<br/>

### Alert Manager

```
kubectl -n monitoring port-forward svc/kubepromstack-kube-prometh-alertmanager 31000:9093
```
Accessed via http://localhost:31000

<br/>

### Grafana
      
```
kubectl -n monitoring port-forward svc/kubepromstack-grafana 3001:3000
```
Accessed via http://localhost:3001:3000

_The default ```username:password``` are ```admin:prom-operator```._

<br/>

### OpenCost/KubeCost

```
kubectl -n kubecost port-forward deployment/kubecost-cost-analyzer 9090
```
Accessed via http://localhost:9090

<br/>

# Grafana Configuration

Additional Grafana configurations are required for the graphical interfaces to render properly through VaaS. In the ```monitoring``` namespace, find the Config Map ```kubepromstack-grafana``` and change the configuration as follows:

<img src='public/Images/configmap_grafana.png'>

<br/>

