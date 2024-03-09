import Tables from "@/models";

const resources = {};

export function getCloudformationTables() {
  for (const Table of Tables) {
    const table_name = removePlaceholders(Table.schema.name);
    console.log("table_name", table_name);
    Object.assign(resources, {
      [table_name]: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          ...Table.schema.createCloudFormationResource(),
          TableName: table_name + "-${opt:stage}",
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
