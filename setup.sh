root=$(pwd)

MSYS_NO_PATHCONV=1 docker run \
    --rm \
    -v ${root}:/app \
    -w /app \
    node:8.11 /bin/bash -c "npm install --no-bin-links"

docker-compose build

MSYS_NO_PATHCONV=1 docker run \
    --rm \
    -v ${root}:/app \
    -w /app \
    node_bower_gulp:dev /bin/bash -c "bower install --allow-root"