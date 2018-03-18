mkdir -p ~/.aws
cat > ~/.aws/credentials << EOL
[default]
aws_access_key_id = ${aws_access_key_id}
aws_secret_access_key = ${aws_secret_access_key}
EOL
echo "key id ${aws_access_key_id}"
~/.local/bin/aws s3 sync build s3://cell5.co.uk --region=eu-west-1 --delete --cache-control="max-age=31536000"
~/.local/bin/aws s3 cp build/index.html s3://cell5.co.uk --cache-control "max-age=0, public"