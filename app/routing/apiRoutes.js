// path = require("path");
// VIK_QUESTION: How to get absolute path name of the file?
let usersData = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/friends", (req, resp) => {
    resp.json(usersData);
})

app.post("/api/friends", (req, resp) => {
    console.log(req.body);
    usersData.push(req.body);
    resp.json(getMostCompatible(req.body));
})
}

function getMostCompatible(finder) {
    const finderArr = finder.scores;
    let closestCompatible;
    let score = Number.MAX_SAFE_INTEGER;

    usersData.forEach(elem => {
        const otherArr = elem.scores;
        // Both arrays should be same length but if they are not 
        // for some reason
        const sameSize = (otherArr.length === finderArr.length);
        console.assert(sameSize, "Score arrays are not same size");
        if ((elem.name != finder.name) && sameSize) {
            let currentScore = 0;
            for (let i = 0; i < otherArr.length; ++i) {
                currentScore += Math.abs(finderArr[i] - otherArr[i]);
            }

            if (currentScore < score) {
                score = currentScore;
                closestCompatible = elem;
            }
        }
    });

    return closestCompatible;
}