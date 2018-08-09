var friendsData = require("../data/friends");

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

    let currentFriend = req.body;

    //changing answers into integers
    for (let i = 0; i < currentFriend.scores.length; i++) {
      if (currentFriend.scores[i] === "5 (Strongly Agree)") {
        currentFriend.scores[i] = 5;
      }

      if (currentFriend.scores[i] === "1 (Strongly Disagree)") {
        currentFriend.scores[i] = 1;
      }

      else {
        currentFriend.scores[i] = parseInt(currentFriend.scores[i]);
      }
    }


    let bestMatchIndex = 0;
    let bestMatch = {};


    //highest difference possible for the most imcompatible
    let bestMatchDiff = 40;



    //for all friends in friends data
    for (i = 0; i < friendsData.length; i++) {
      let totalDiff = 0;

      //calculate each score difference between current and each friend in friends data
      for (j = 0; j < friendsData[i].scores[j]; j++) {
        let eachScoreDiff = Math.abs(currentFriend.scores[j] - friendsData[i].scores[j])
        totalDiff = totalDiff + eachScoreDiff;
      }
      console.log(totalDiff);

      //if the total difference is less than the old best match's total difference, update the best match index to the new best match's index
      if (totalDiff < bestMatchDiff) {
        bestMatchDiff = totalDiff;
        bestMatchIndex = i;
      }

      console.log(bestMatchIndex);

    }

    //best match becomes the new best match in the friends data
    bestMatch = friendsData[bestMatchIndex];
    console.log(bestMatch);
    friendsData.push(currentFriend);
    res.json(bestMatch);

  })
};