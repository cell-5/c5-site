# cell5-vue-website

> Cell 5 Website

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Deploy to S3

#### Requirements
- AWS IAM account
- aws-cli -- [configuration guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- production distribution _(dist)_

```
$ chmod a+x scripts/deploy.sh
$ ./scripts/deploy.sh
```
_* Use deploy.bat for windows._
