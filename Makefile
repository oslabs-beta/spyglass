up:
	minikube start

status:
	minikube status
intsall-prom:
	helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
	helm repo update
	kubectl create namespace monitoring
	helm install kubepromstack prometheus-community/kube-prometheus-stack --namespace=monitoring --values=prom-stack-values.yaml

check-prom:
	kubectl get pods --namespace monitoring
delete-prom:
	helm uninstall kubepromstack --namespace=monitoring
prom-access:
	kubectl port-forward -n monitoring svc/kubepromstack-grafana 8000:80

install-kubecost:
	helm install kubecost cost-analyzer \
	--repo https://kubecost.github.io/cost-analyzer/ \
	--namespace kubecost --create-namespace \
	--set kubecostToken="Y2luZHljaGF1MTFAZ21haWwuY29txm343yadf98"

kubecost-access:
	kubectl port-forward --namespace kubecost deployment/kubecost-cost-analyzer 9090

check-kubecost:
	kubectl get pods --namespace kubecost

install-kubeview:
	helm repo add kubeview https://benc-uk.github.io/kubeview/charts
	helm install my-kubeview kubeview/kubeview --version 0.1.31 --namespace=monitoring

kubeview-access:
	kubectl port-forward svc/my-kubeview -n monitoring 9000:80

down:
	minikube stop