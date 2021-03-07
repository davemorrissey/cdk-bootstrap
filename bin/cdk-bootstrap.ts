#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkBootstrapStack } from '../lib/cdk-bootstrap-stack';

const app = new App();
new CdkBootstrapStack(app, 'ex-cdk-bootstrap', { env: {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION
}});
