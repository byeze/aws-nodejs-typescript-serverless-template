import type { AWS } from "@serverless/typescript";
import functions from "./src/functions";
import environment from "./infra/environment.infra";
import { getCloudformationTables } from "./infra/tables.infra";
import statements from "./infra/iam.infra";

const config: AWS = {
  service: "service-name-api",
  frameworkVersion: "3",
  configValidationMode: "error",
  package: {
    individually: true,
    exclude: ["node_modules/**"],
  },
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    apiName: "service-name-api",
    stage: "${opt:stage, 'dev'}",
    region: "us-east-1",
    environment,
    logRetentionInDays: 14,
    iamRoleStatements: statements,
  },
  resources: {
    Resources: {
      ...getCloudformationTables(),
    },
  },
  functions,
  custom: {
    stages: ["dev", "staging", "prod"],
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      external: ["aws-sdk"],
    },
  },
  plugins: [
    "serverless-esbuild",
    "serverless-offline",
    // "serverless-domain-manager",
  ],
};

module.exports = config;
