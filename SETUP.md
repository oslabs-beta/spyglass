### Spyglass' Setup Instructions

Clone the Spyglass repo from GitHub to your local machine.

```
git clone https://github.com/oslabs-beta/spyglass.git
```

## Deploy a local Kubernetes cluster on Minikube
To get started, you will need to have a Kubernetes cluster. You can create a single-node Kubernetes cluster on your local machine using Minikube. Install Minikube using documentation at this [link](https://minikube.sigs.k8s.io/docs/start/).

Here are instructions if you have a MacOS: 

1. Install Docker 

```
brew install docker
```

2. Install Minikube 

```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64
sudo install minikube-darwin-arm64 /usr/local/bin/minikube

```

3. Start your cluster 

```
minikube start --vm-driver=docker 
```

<br/>

## Install Helm and Kube-Prometheus-Stack 
Helm is a package manager for Kubernetes that manages and packages all the necessary resources for your Kubernetes cluster in a single unit called a chart. See documentation at this [link](https://helm.sh/docs/intro/quickstart/). 

Kube-Prometheus-Stack is a Helm chart that includes a set of applications to monitor Kubernetes clusters. See documentation at this [link](https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/README.md).

Here are instructions if you have a MacOS: 

1. Install Helm

```
brew install helm
```

2. Add prometheus-community repo to Helm and update 
```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

3. Create a new namespace in your cluster named ```monitoring```

```
kubectl create namespace monitoring
```

4. Install Kube-Prometheus-Stack 

```
helm install kubepromstack prometheus-community/kube-prometheus-stack --namespace=monitoring

```

5. Check progress 
```
kubectl get pods --namespace monitoring
```
<br/>


## Access Grafana 



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

<br/>


# Grafana Configuration

Additional Grafana configurations are required for the graphical interfaces to render properly through VaaS. In the ```monitoring``` namespace, find the Config Map ```kubepromstack-grafana``` and change the configuration as follows:

<img src='public/Images/configmap_grafana.png'>

<br/>

