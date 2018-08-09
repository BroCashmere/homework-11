# homework-11 - Friend- Finder

What the project does

Based on user's input of 10 survey questions, calculates the closest compatible friend, and matches the user with a best match friend.  Each friend has a name and picture.  The best match is calculated by finding the difference between each of the individual 10 scores between each pair and totalling that difference.  It then selects the friend with the lowest distance and sets it as the best match.

The program uses express to select paths for pages to direct to depending on the URL path.  'Home' annd 'survey' takes to the respective pages, any other route defaults to the original home page.  The program also requires body-parser to parse the data response.

THe program also involves creating and hosting a local server, which using node to run it and heroku to deploy it to the web.

Why the project is useful

Helps the user find their best matched friend based on compatibility.

How users can get started with the project

Access the app via the heroku link here: https://bc2018-friend-finder.herokuapp.com/

