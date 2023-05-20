#!/bin/bash
kubectl scale deployment frontend-deployment --replicas=0
kubectl scale deployment backend-deployment --replicas=0
