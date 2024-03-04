import { formatJSONResponse } from "@/libs/lambda.lib";
import { middyfy } from "@/middlewares";
import { APIGatewayProxyEvent } from "@/types/lambda.type";

const handler: APIGatewayProxyEvent = async (event) => {
  return formatJSONResponse({
    ok: true,
    message: "Hello World (from protected route)",
    event,
  });
};

export const main = middyfy(handler);
