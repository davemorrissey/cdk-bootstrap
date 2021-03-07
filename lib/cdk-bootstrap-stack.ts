import * as cdk from '@aws-cdk/core';
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';
import { StringParameter } from '@aws-cdk/aws-ssm';

export class CdkBootstrapStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a VPC with public, private and isolated subnets in each AZ
    const vpc = new Vpc(this, 'ex-vpc', {
      cidr: "10.0.0.0/16",
      maxAzs: 3,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private',
          subnetType: SubnetType.PRIVATE,
        },
        {
          cidrMask: 24,
          name: 'isolated',
          subnetType: SubnetType.ISOLATED,
        }
      ]
    });

    // Export IDs for other SDK projects to import
    new StringParameter(this, "ex-ssm-vpc-id", {
      parameterName: "ex-ssm-vpc-id",
      stringValue: vpc.vpcId,
    });
    
  }
}
