### Spyglass' Setup Instructions

Clone the Spyglass repo from GitHub to your local machine.
```
git clone https://github.com/oslabs-beta/spyglass.git
```

## Create a .env file with: 
```
MONGO_URI=
VITE_LOCALCLUSTERIP=
VITE_LOCALCLUSTERNAME=
```

Here is an example ENV file: 
```
MONGO_URI= "mongodb+srv://dummyAcc:HVcsVJuNv2fTCJJl@spyglassdev.jmhr4fn.mongodb.net/?retryWrites=true&w=majority"
VITE_LOCALCLUSTERIP=localhost:8000
VITE_LOCALCLUSTERNAME=IMOt5Yf4z
```

<br/>

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

Kube-Prometheus-Stack is a Helm chart that includes a set of applications to monitor Kubernetes clusters using the Prometheus monitoring system. See documentation at this [link](https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/README.md).

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

5. Retrieve information about the pods running in the ```monitoring``` namespace of your Kubernetes cluster
```
kubectl get pods --namespace monitoring
```
<br/>


## Access Grafana 
Grafana is an application part of Kube-Prometheus-Stack that provide visualizations for metrics monitoring a Kubernetes cluster. See documentation at this [link](https://grafana.com/grafana/).

1. Edit Grafana's configuration map in order to render visuals correctly in Spyglass.
```
kubectl edit configmap kubepromstack-grafana --namespace monitoring
```

Make this change in Grafana's configuration map.
```
[security]
allow_embedding = true
```

2. Access Grafana by port-forwarding to http://localhost:8000 or click "Local Cluster Metrics" in Spyglass.
```
kubectl port-forward -n monitoring svc/kubepromstack-grafana 8000:80
```

## Access KubeCost

KubeCost is a Kubernetes cost monitoring tool upon which VaaS's budget and forecasting features are built upon. See documentation at [link](https://docs.kubecost.com/).

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

## Access KubeView
KubeView is a web-based UI that allows you to view the status of your Kubernetes cluster. See documentation at &nbsp;[link](https://artifacthub.io/packages/helm/kubeview/kubeview?modal=install).

```
helm repo add kubeview https://benc-uk.github.io/kubeview/charts
helm install my-kubeview kubeview/kubeview --version [CURRENT VERSION] --namespace=monitoring
```