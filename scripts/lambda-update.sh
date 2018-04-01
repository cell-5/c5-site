if [ -e contactUsHandler.zip ]
then
  rm contactUsHandler.zip
fi
lambda_dir="lambda"
lambda_node_mod_dir="${lambda_dir}/node_modules"
mkdir -p $lambda_node_mod_dir
cp src/contactUsHandler.js "${lambda_dir}/index.js"
cp node_modules/axios $lambda_node_mod_dir -r
cp node_modules/debug $lambda_node_mod_dir -r
cp node_modules/follow-redirects $lambda_node_mod_dir -r
cp node_modules/is-buffer $lambda_node_mod_dir -r
cp node_modules/ms $lambda_node_mod_dir -r
cd $lambda_dir
touch package.json
zip -X -r ../contactUsHandler.zip *
cd ..
rm -rf $lambda_dir
# aws lambda update-function-code --function-name contactUsHandler --zip-file fileb://contactUsHandler.zip
