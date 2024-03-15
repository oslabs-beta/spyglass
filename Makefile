.PHONY: setup grafana_edit grafana kubecost kubeview promql

# Docker, Minikube and Helm must be installed

setup:
# start cluster
	minikube start --vm-driver=docker 
# add prometheus-community repo to Helm and update
	helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
	helm repo update
# create a new namespace in your cluster named monitoring
	kubectl create namespace monitoring
# Install Kube-Prometheus-Stack
	helm install kubepromstack prometheus-community/kube-prometheus-stack --namespace=monitoring
# Retrieve information about the pods running in the monitoring namespace of your Kubernetes cluster
	kubectl get pods --namespace monitoring
grafana_edit:
# to Edit Grafana's configuration map in order to render visuals correctly in Spyglass
	kubectl edit configmap kubepromstack-grafana --namespace monitoring
grafana:
# Access Grafana by port-forwarding to http://localhost:8000 or click "Local Cluster Metrics" in Spyglass.
	kubectl port-forward -n monitoring svc/kubepromstack-grafana 8000:80	

kubecost:
# installs Kubecost and creates a namespace named kubecost
	helm install kubecost cost-analyzer \
	--repo https://kubecost.github.io/cost-analyzer/ \
	-namespace kubecost --create-namespace \
	--set kubecostToken="Y2luZHljaGF1MTFAZ21haWwuY29txm343yadf98"
# Retrieve information about the pods running in the kubecost namespace of your Kubernetes cluster
	kubectl get pods --namespace kubecost
# Access Kubecost by port-forwarding to http://localhost:9090 or click "Cost Analysis" in Spyglass
	kubectl port-forward --namespace kubecost deployment/kubecost-cost-analyzer 9090
kubeview:
# Add Kubeview repo to Helm
	helm repo add kubeview https://benc-uk.github.io/kubeview/charts
# Install 
	helm install my-kubeview kubeview/kubeview --version 0.1.31 --namespace=monitoring
# Access Kubeview by port-forwarding to http://localhost:9000 or click "Cluster Visualizer" in Spyglass.
	kubectl port-forward svc/my-kubeview -n monitoring 9000:80
promql:
# Access Prometheus by port-forwarding to http://localhost:7000
	kubectl port-forward -n monitoring svc/kubepromstack-prometheus 7000:9090

