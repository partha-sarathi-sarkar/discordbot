#!/bin/bash

# Log into Azure
az login -u $AUREUSERNAME -p $AZUREPASSWORD

# Docker log into Azure Container Registry
az acr login --name $ACR_NAME

# Push container Azure Container Registry
docker push $ACR_NAME.azurecr.io/$DOCKER_IMAGE_NAME:$TRAVIS_COMMIT  
