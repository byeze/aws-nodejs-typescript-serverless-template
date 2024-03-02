import { AWSLambdaConfig } from "@/types/lambda.type";

export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.handler`,
} as AWSLambdaConfig;
