#!/usr/bin/bash
function log() {
  echo "$1"
}

function uploadToS3() {
  log "Uploading [$1] to [$2]"
  aws s3 cp $1 $2
}


function uploadToS3Recursively() {
  log "Uploading [$1] to [$2]"
  aws s3 cp $1 $2 --recursive
  #Hack to force metadata only for index.html
  aws s3 cp --cache-control max-age=0 $1/index.html $2
}
