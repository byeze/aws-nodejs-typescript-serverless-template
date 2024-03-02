type ILambdaFormatResponseParams = {
  statusCode: number;
  body: string;
  headers: Record<string, string | boolean>;
};

export const formatJSONResponse = (
  response: Record<string, unknown>,
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
