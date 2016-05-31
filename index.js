const graphql = require("graphql");

const mongodb = require("mongodb");
const assert = require("assert");

const mySchema = require("./schema/main");
const MONGO_URL = 'mongodb://localhost:27017/test';

const express = require("express");
const app = express();

const graphqlHTTP = require("express-graphql");

mongodb.MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err);
  console.log("Connected to MongoDB server");

  app.use("/graphql", graphqlHTTP({
    schema: mySchema,
    graphiql: true,
    context: { db }
  }));

  app.listen(3000, () =>
    console.log("Running Express.js on port 3000")
  );
});
