#!/bin/bash
kubectl scale deployment frontend-deployment --replicas=1
kubectl scale deployment backend-deployment --replicas=1
