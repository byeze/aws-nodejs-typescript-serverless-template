# Serverless TypeScript Node.js AWS Template

This template provides a robust setup for developing serverless applications using TypeScript and Node.js on AWS. It integrates several key technologies and libraries to streamline the development process, from managing DynamoDB tables to deploying your application.

## Features

- **Node.js 18**: Utilizes the latest Node.js runtime for optimal performance and feature support.
- **TypeScript**: Leverages TypeScript for type safety and developer productivity.
- **AWS DynamoDB**: Includes "@ezee/dyngoose" for efficient DynamoDB table management.
- **esbuild**: Utilizes esbuild for fast and efficient bundling of TypeScript code.
- **Middy**: Integrates middy middleware for enhanced AWS Lambda function handling.
- **Sample Authorizer**: Comes with a sample authorizer for managing access control.
- **Infrastructure as Code**: Contains an `infrastructure` folder to facilitate resource management within your application.
- **Code Quality Tools**: Enforces code consistency and quality with ESLint and Prettier.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/byeze/aws-nodejs-typescript-serverless-template service-name
   cd service-name
   ```

2. **Install Dependencies**

   ```bash
   pnpm i
   ```

3. **Configure AWS Credentials**

   Ensure your AWS credentials are configured properly by setting up the AWS CLI or exporting your credentials as environment variables.

4. **Deploy to AWS**

   ```bash
   pnpm serverless deploy --stage dev
   ```

## Directory Structure

- `src/`: Source directory for all your Lambda functions and application logic.
- `infrastructure/`: Contains infrastructure as code files for AWS resource management.
- `.eslintrc`: ESLint configuration file for linting.
- `.prettierrc`: Prettier configuration file for code formatting.
- `serverless.yml`: Serverless framework configuration file for AWS deployment.

## Development

- **Local Development**: Use `npx serverless offline` to simulate AWS Lambda and API Gateway locally.
- **Linting**: Run `pnpm run lint` to identify and fix linting errors.
- **Formatting**: Use `pnpm run format` to automatically format your code using Prettier.

## Adding New Resources

To add new AWS resources, update the `infrastructure` folder with your resource definitions and deploy them using the Serverless Framework.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

This README template provides a concise overview of your project, how to get started, and how to contribute. Adjust paths, URLs, and other specific details according to your project's actual configuration and repository location.
