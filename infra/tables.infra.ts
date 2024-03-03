import Tables from "@/models";

const resources = {};

export function getCloudformationTables() {
  for (const Table of Tables) {
    Object.assign(resources, {
      [removePlaceholders(Table.schema.name)]: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          ...Table.schema.createCloudFormationResource(),
          TableName: Table.schema.name + "${opt:stage}",
        },
      },
    });
  }
  return resources;
}

function removePlaceholders(name: string) {
  // Remove placeholders in the format ${placeholdername}
  name = name.replace(/-\$\{.*?\}/g, "").replace(/\$\{.*?\}/g, "");
  // Remove all special characters
  return name.replace(/[^a-zA-Z0-9]/g, "");
}
