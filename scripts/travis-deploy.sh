mkdir -p ~/.aws
cat > ~/.aws/credentials << EOL
[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
EOL
echo ${AWS_ACCESS_KEY_ID}
~/.local/bin/aws s3 sync build s3://cell5.co.uk --region=eu-west-1 --delete --cache-control="max-age=31536000"
~/.local/bin/aws s3 cp build/index.html s3://cell5.co.uk --cache-control "max-age=0, public"