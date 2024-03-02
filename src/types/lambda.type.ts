import { AWS } from "@serverless/typescript";
import type {
  APIGatewayProxyResult,
  APIGatewayProxyEvent as AWSAPIGatewayProxyEvent,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<
  AWSAPIGatewayProxyEvent,
  "body"
> & {
  body: FromSchema<S>;
};

export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

type APIGatewayProxyType = Omit<AWSAPIGatewayProxyEvent, "body"> & {
  body: Record<string, unknown>;
};

export type APIGatewayProxyEvent = Handler<
  APIGatewayProxyType,
  APIGatewayProxyResult
>;

export type AWSLambdaConfig = AWS["functions"][0];
