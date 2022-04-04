import https from "https";
https.get("https://www.lynda.com", (res) => {
  console.log("Response status code:", res.statusCode);
  res.on("data", (chunk) => {
    console.log(chunk.toString());
     console.log("hello");
  });
});
/* example one
//import config, { nodeEnv, logStars } from "./config.js";
//only default export can directly import, non default parameters need to be include to {}
//console.log(config, nodeEnv); //invoke variables
//logStars; //invoke function
