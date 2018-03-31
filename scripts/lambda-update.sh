if [ -e contactUsHandler.zip ]
then
  rm contactUsHandler.zip
fi
mkdir -p lambda
cp src/contactUsHandler.js lambda/index.js
cp node_modules/axios/dist/axios.js lambda/
cd lambda
touch package.json
zip -X -r ../contactUsHandler.zip *
cd ..
rm -rf lambda
# aws lambda update-function-code --function-name contactUsHandler --zip-file fileb://contactUsHandler.zip
