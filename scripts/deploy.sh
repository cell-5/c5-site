#!/usr/bin/bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source ${DIR}/utils.sh

REGION="eu-west-1"

uploadToS3Recursively ${DIR}/../build s3://cell5.co.uk/

log "UI modules deployed"
