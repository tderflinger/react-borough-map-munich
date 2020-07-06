echo "Deploying to AWS Bucket"
cd build
aws s3 sync --acl public-read --delete . s3://www.react-borough-map-munich.com
echo "Finished! Go to http://www.react-borough-map-munich.com.s3.eu-central-1.amazonaws.com"
