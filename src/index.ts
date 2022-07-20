import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [__dirname + "/entities/*.ts"],
    dbName: "lireddit",
    user: "postgres",
    password: "postgres",
    type: "postgresql",
    debug: !__prod__,
  });
};

main();
