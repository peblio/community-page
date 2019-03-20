#!/usr/bin/env bash
set -e
BASEDIR=$(dirname $( cd $(dirname $0) ; pwd -P ))
cd $BASEDIR

if ! [ -x "$(command -v aws)" ]; then
  echo "This deployment script requires the AWS CLI to run."
  exit 1
fi

ENVIRONMENT=$1

if [ "$ENVIRONMENT" = "staging" ]; then
  BUILD_COMMAND='npm run build'
  S3_BUCKET="s3://communitystaging.peblio.co"
  DIST_ID="E9ENZDAFIVF1G"
elif [ "$ENVIRONMENT" = "production" ]; then
  BUILD_COMMAND='npm run build'
  S3_BUCKET="s3://communitystaging.peblio.co"
  DIST_ID="E9ENZDAFIVF1G"
else
  echo "$ENVIRONMENT is not a valid deployment environment."
  exit 1
fi

rm -rf ./build

# build the app
eval $BUILD_COMMAND

# deploy to S3
aws s3 sync build/ "$S3_BUCKET" --profile peblio --delete

# invalidate CloudFront caches
aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths "/*" --profile peblio
