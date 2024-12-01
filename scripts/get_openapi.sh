#!/bin/bash

wget $1 -O openapi.json;
node modify-openapi-operationids.js;