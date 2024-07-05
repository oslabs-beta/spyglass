prom:
	helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
	helm repo update
	helm install kubepromstack prometheus-community/kube-prometheus-stack --namespace=monitoring --values=prom-stack-values.yaml
	kubectl get pods --namespace monitoring