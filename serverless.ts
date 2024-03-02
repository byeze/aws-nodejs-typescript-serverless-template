import type { AWS } from "@serverless/typescript";
import functions from "./src/functions";
import environment from "./infra/environment.infra";
import { getCloudformationTables } from "./infra/tables.infra";

const config: AWS = {
  service: "agency-api",
  frameworkVersion: "3",
  configValidationMode: "error",
  package: {
    individually: true,
    exclude: ["node_modules/**"],
  },
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    apiName: "agency-api",
    stage: "${opt:stage, 'dev'}",
    region: "us-east-1",
    environment,
    logRetentionInDays: 14,
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
