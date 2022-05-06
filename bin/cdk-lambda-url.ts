#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkLambdaUrlStack } from '../lib/cdk-lambda-url-stack';

const app = new cdk.App();
const stack_region = app.node.tryGetContext("region");
new CdkLambdaUrlStack(app, 'CdkLambdaUrlStack', {
  env: {
    region: stack_region
  }
});