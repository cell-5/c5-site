~/.local/bin/aws s3 sync dist s3://cell5.co.uk --region=eu-west-1 --delete --cache-control="max-age=31536000"
~/.local/bin/aws s3 cp dist/index.html s3://cell5.co.uk --cache-control "max-age=0, public"