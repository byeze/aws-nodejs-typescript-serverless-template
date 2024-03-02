import { generatePolicy } from "@/functions/authorizer/custom/lib/policy.lib";
import {
  APIGatewayTokenAuthorizerEvent,
  APIGatewayAuthorizerResult,
} from "aws-lambda";

export const handler = async (
  event: APIGatewayTokenAuthorizerEvent,
): Promise<APIGatewayAuthorizerResult> => {
  if (event.authorizationToken === "Bearer 123") {
    return generatePolicy("user", "Allow", event.methodArn);
  }
  return generatePolicy("user", "Deny", event.methodArn);
};
