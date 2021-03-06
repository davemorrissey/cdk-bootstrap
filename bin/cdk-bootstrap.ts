#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkBootstrapStack } from '../lib/cdk-bootstrap-stack';

const app = new cdk.App();
new CdkBootstrapStack(app, 'CdkBootstrapStack');
