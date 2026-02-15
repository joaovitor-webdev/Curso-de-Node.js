// const { Person } = require("./person");

const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/connect");

dotenv.config();

require("./modules/express");

connectToDataBase();

// require('./modules/path')
// require('./modules/fs')
// require("./modules/http");

// const person = new Person("João");
