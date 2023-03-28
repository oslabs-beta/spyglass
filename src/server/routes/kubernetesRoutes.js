//import express 
import express  from "express";
import path from "path";

//import packages related to k8 
import k8s from '@kubernetes/client-node';

//list all pods
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
k8sApi.listNamespacedPod('default').then((res) => {
    console.log(res.body)
});

//grab the k8 cluster info 

//grab pod Info 