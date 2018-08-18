let express = require("express");
let bodyParser = require("body-parser");
// let path = require(path);
const PORT = process.env.PORT || 8080;

const app = express();
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes.js")(app)


app.listen(PORT, () => {
    console.log("Friend finder listening on http://localhost:" + PORT);
})