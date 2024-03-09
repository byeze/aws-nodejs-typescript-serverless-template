const env = {
  HELLO_TABLE: "hello-${opt:stage}",

  NODE_OPTIONS: "--enable-source-maps",
  NODE_ENV: '${opt:stage, "develop"}',
  AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
};

export default env

/**
 * @description Get's dynamically the environment variable
 * @param variable_name Name of the environment variable
 * @returns 
 */
export function getVariable(variable_name: string) {
  return process.env[variable_name] || env[variable_name];
}