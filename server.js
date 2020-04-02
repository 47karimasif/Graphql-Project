const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const path = require("path");
const app = express();

//alow cross-origin request
app.use(cors());

const connectDB = require("./config/db");
// connecting database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema, // this is basically schema:schema (up above while requiring we can mae it as any thing and put here as schema:name)
    graphiql: true
  })
);

//for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.use("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`port running on ${port}`));
