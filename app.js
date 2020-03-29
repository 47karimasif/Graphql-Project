const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();

app.use("/graphql", graphqlHTTP({
    
}));

const port = 5000;
app.listen(port, () => console.log(`port running on ${port}`));
