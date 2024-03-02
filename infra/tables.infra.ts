import Tables from "@/models";

const resources = {};

export function getCloudformationTables() {
  for (const Table of Tables) {
    Object.assign(resources, {
      [removePlaceholders(Table.schema.name)]: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          ...Table.schema.createCloudFormationResource(),
          TableName: parseServerlessName(Table.schema.name),
        },
      },
    });
  }
  return resources;
}

function parseServerlessName(name: string) {
  return name.replace("${opt:stage}", "${self:provider.stage}");
}

function removePlaceholders(name: string) {
  // match any ${}
  const placeholderRegex = /-?\${.*?}/g;
  return name.replace(placeholderRegex, "");
}
