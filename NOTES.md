Hello! Thanks for giving me the opportunity to work on this challenge. It was fun to dip my toes back into the Node/Express world after spending so much time in Goland. 

Here is how to get things going:

- Clone this repo
- Cd into src
- Run `npm install`
- Start the server by running `ts-node index.ts` (if you don't have this installed globally, run `npm install -g ts-node --force`)
- To test the stays endpoint, send a request like `http://localhost:3000/stays?beds=2`; if you want to add multiple queries, separate them with `&` and the amenities param needs to be written like `amens='wifi, tv'`
- To test the reviews endpoint, first you need to grab one of the IDs by running `http://localhost:3000/stays` and selecting one of the IDs from that array, then run `http://localhost:3000/reviews/:id`

If I had more time, I would try to do the following:
- Add better error handling for the db connection and the two routes--right now it just logs if someone is unable to connect to the db, reuse the db connection, or their query to either route receives no results
- Fix the amenities param so that the db query checks to see if the amenities provided in the query are included in any of the listings rather than the two arrays of amentities needing to be an exact match. I'd also rework the stays query so that if an amentities param doesn't match any of the given options, the user is alerted and the query doesn't include the incorrect value
- Create tests where necessary (like `determinePageSkip`)
