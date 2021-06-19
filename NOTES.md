Hello! Admittedly, it has been a while since I've worked with node and express, so my work is on the minimal side. Here is how to get things going:

- clone this repo
- cd into src
- run `npm install`
- start the server by running `ts-node index.ts` (if you don't have this installed globally, run `npm install -g ts-node --force`)
- to test the stays endpoint, send a request like `http://localhost:3000/stays?beds=2`; if you want to add multiple queries, separate them with `&` and the amenities param needs to be written like `amens='wifi, tv'`
- to test the reviews endpoint, first you need to grab one of the IDs by running `http://localhost:3000/stays` and selecting one of the IDs from that array, then run `http://localhost:3000/reviews/:id`

If I had more time, I would try to do the following:
- add error handling for the db connection and the two routes
- create tests where necessary (like `determinePageSkip`)
- rework the stays query so that if an amentities param doesn't match any of the given options, the user is alerted and the query doesn't include the incorrect value
