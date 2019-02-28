var pgp = require("pg-promise")({});
var connectionString = (process.env.DATABASE_URL || "postgres://localhost/userlist");
var db = pgp(connectionString);

module.exports = db;
