import { AWSLambdaConfig } from "@/types/lambda.type";

export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "hello/protected",
        authorizer: {
          name: "customAuthorizer",
          authorizerId: {
            Ref: "customAuthorizer",
          },
        },
      },
    },
  ],
} as AWSLambdaConfig;
