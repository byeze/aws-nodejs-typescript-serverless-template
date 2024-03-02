export default {
  NODE_OPTIONS: "--enable-source-maps",
  NODE_ENV: '${opt:stage, "develop"}',
  AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
} as const;
