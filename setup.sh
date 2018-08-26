root=$(pwd)

docker run \
    --user $(id -u):$(id -g) \
    --rm \
    -v ${root}:/app \
    -w /app \
    node:8.11 /bin/bash -c "npm install"

docker-compose build

docker run \
    --user $(id -u):$(id -g) \
    --rm \
    -v ${root}:/app \
    -w /app \
    node_bower:dev /bin/bash -c "bower install"