import { Dyngoose } from "@ezee/dyngoose";
import { getVariable } from "infra/environment.infra";

@Dyngoose.$Table({
  name: getVariable("HELLO_TABLE"),
})
export class HelloTable extends Dyngoose.Table {
  @Dyngoose.Attribute.String()
  public id: string;

  @Dyngoose.Attribute.Boolean({
    default: false,
  })
  public enabled: string;

  @Dyngoose.Attribute.Date({
    nowOnCreate: true,
  })
  public createdAt: Date;

  @Dyngoose.Attribute.Date({
    nowOnUpdate: true,
  })
  public updatedAt: Date;

  @Dyngoose.$PrimaryKey("id")
  static readonly primaryKey: Dyngoose.Query.PrimaryKey<
    HelloTable,
    string,
    undefined
  >;

  @Dyngoose.$DocumentClient()
  static readonly documentClient: Dyngoose.DocumentClient<HelloTable>;
}
