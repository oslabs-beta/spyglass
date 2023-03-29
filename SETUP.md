## Spyglass' Setup Instructions

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
To get started, you will need to have a Kubernetes cluster. You can create a single-node Kubernetes cluster on your local machine using Minikube. Install Minikube using [documentation](https://minikube.sigs.k8s.io/docs/start/).

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
Helm is a package manager for Kubernetes that manages and packages all the necessary resources for your Kubernetes cluster in a single unit called a chart. See [documentation](https://helm.sh/docs/intro/quickstart/) for more information.

Kube-Prometheus-Stack is a Helm chart that includes a set of applications to monitor Kubernetes clusters using the Prometheus monitoring system. See [documentation](https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/README.md) for more information.

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


## Access Grafana for cluster health metrics 
Grafana is an application part of Kube-Prometheus-Stack and provides visualizations for metrics monitoring a Kubernetes cluster. See [documentation](https://grafana.com/grafana/) for more information.

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

## Access Kubecost for cost optimization
Kubecost analyzes CPU, PV, and RAM resource usage on Kubernetes clusters. Using Kubecost, Spyglass helps provide monthly estimates to help you optimize your costs! See [documentation](https://docs.kubecost.com/) for more information.

1. Install Kubecost and create a namespace named ```kubecost```
```
helm install kubecost cost-analyzer \
--repo https://kubecost.github.io/cost-analyzer/ \
--namespace kubecost --create-namespace \
--set kubecostToken="Y2luZHljaGF1MTFAZ21haWwuY29txm343yadf98"
```

2. Retrieve information about the pods running in the ```kubecost``` namespace of your Kubernetes cluster
```
kubectl get pods --namespace kubecost
```

3. Access Kubecost by port-forwarding to http://localhost:9090 or click "Cost Analysis" in Spyglass.
```
kubectl port-forward --namespace kubecost deployment/kubecost-cost-analyzer 9090
```

<br/>

## Access Kubeview for cluster visualization
Kubeview provides a graphical representation of a Kubernetes cluster and its resources. See [documentation](https://github.com/benc-uk/kubeview) for more information.

1. Add Kubeview repo to Helm
```
helm repo add kubeview https://benc-uk.github.io/kubeview/charts
```

2. Install Kubeview (Please replace with current version)
```
helm install my-kubeview kubeview/kubeview --version 0.1.31 --namespace=monitoring
```

3. Access Kubeview by port-forwarding to http://localhost:9000 or click "Cluster Visualizer" in Spyglass.
```
kubectl port-forward svc/my-kubeview -n monitoring 9000:80
```

## Access Prometheus and make custom PROMQL queries 
Prometheus is another application part of Kube-Prometheus-Stack and scrapes metrics on Kubernetes clusters. See [documentation](https://prometheus.io/docs/prometheus/latest/getting_started/) for more information.

1. Access Prometheus by port-forwarding to http://localhost:7000 
```
kubectl port-forward -n monitoring svc/kubepromstack-prometheus 7000:9090
```