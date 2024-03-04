import logger from "@/libs/logger.lib";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ulid } from "ulidx";

const axiosClient: AxiosInstance = axios.create();

axiosClient.interceptors.request.use(async (config) => {
  const traceId = `trace_${ulid()}`;
  logger.info({
    code: "AXIOS.REQUEST",
    message: `Outgoing request to ${config.url}`,
    request: {
      headers: config.headers,
      params: config.params,
      url: config.url,
      method: config.method,
      body: config.data,
    },
    traceId,
  });

  return {
    ...config,
    traceId,
  };
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    logger.error({
      code: "AXIOS.RESPONSE",
      message: `Error in response from ${error.config.url}`,
      error: {
        name: error.name,
        stack: error.stack,
      },
      response: {
        status: error.response?.status,
        headers: error.response?.headers,
        data: JSON.stringify(error.response?.data),
      },
      traceId: error.config.traceId,
    });
    return Promise.reject(error);
  },
);

export default axiosClient;
