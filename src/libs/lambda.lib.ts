type ILambdaFormatResponseParams = {
  statusCode: number;
  body: string;
  headers: Record<string, string | boolean>;
};

type ResponseType = Record<string, unknown> & {
  ok: boolean;
  data?: unknown;
};

export const formatJSONResponse = (
  response: ResponseType,
  statusCode = 200,
): ILambdaFormatResponseParams => {
  return {
    statusCode,
    body: JSON.stringify(response),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
  };
};
