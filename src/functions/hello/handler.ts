import axiosClient from "@/libs/axios.lib";
import { formatJSONResponse } from "@/libs/lambda.lib";
import { middyfy } from "@/middlewares";
import { APIGatewayProxyEvent } from "@/types/lambda.type";

const handler: APIGatewayProxyEvent = async (event) => {
  const sampleApiRequest = await axiosClient.get(
    "https://jsonplaceholder.typicode.com/todos/1",
  );
  return formatJSONResponse({
    ok: true,
    message: "Hello World",
    event,
    sampleApiRequest: sampleApiRequest.data,
  });
};

export const main = middyfy(handler);
