import { Statement as statement } from "cdk-iam-floyd";

const statements = [
  // tables
  new statement.Dynamodb()
    .allow()
    .toBatchWriteItem()
    .toQuery()
    .toPutItem()
    .toUpdateItem()
    .toDeleteItem()
    .toGetItem()
    .toScan()
    .on(
      "$::hello-${opt:stage}",
      "arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.HELLO_TABLE}/index/*",
    ),
];

/**
 * Convert iam-floyd statements to standard CDK PolicyStatements
 */
export function toServerlessJson(sst) {
  return sst.map((s) => {
    const statementJSON = s.toJSON();
    const { Resource }: { Resource: string | string[] } = statementJSON;

    // replace $:: with Fn::GetAtt
    if (Resource) {
      if (typeof Resource === "string" && Resource.startsWith("$::")) {
        statementJSON.Resource = {
          "Fn::GetAtt": [Resource.substring(3), "Arn"],
        };
      } else if (Array.isArray(Resource) || typeof Resource === "object") {
        Resource.forEach((r, i) => {
          if (r.startsWith("$::")) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Resource[i] = { "Fn::GetAtt": [r.substring(3), "Arn"] } as any;
          }
        });
      }
    }

    return statementJSON;
  });
}

export default toServerlessJson(statements);
