import * as env from "env-var";

const config = {
  db: {
    host: env.get("DB_HOST").required().asString(),
    port: env.get("DB_PORT").required().asPortNumber(),
    username: env.get("DB_USER").required().asString(),
    password: env.get("DB_PASSWORD").required().asString(),
    database: env.get("DB_DATABASE").required().asString(),
  },
};

export default config;
