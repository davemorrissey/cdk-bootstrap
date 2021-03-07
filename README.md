# Account bootstrap

This project is intended to run against a new AWS account. It will create:

* A VPC named ex-vpc (10.0.0.0/16)
* Public, private and isolated subnets in each availability zone with automatically
  assigned ranges.

## Prerequisites

* An AWS account with 10.0.0.0/16 unassigned
* AWS CLI, CDK, Node > 10
* A CLI user with administrator access set up as default CLI user

## Optional setup

Configure CDK_DEFAULT_ACCOUNT and CDK_DEFAULT_REGION environment variables to ensure
all availability zones can be used.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk destroy`     tear down the whole stack
