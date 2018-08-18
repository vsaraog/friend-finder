let path = require("path");

module.exports = function(app) {
app.get("/survey", (req, resp) => {
    resp.sendFile(path.join(__dirname, "/../public/survey.html"));
})

app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "/../public/home.html"));

})
}