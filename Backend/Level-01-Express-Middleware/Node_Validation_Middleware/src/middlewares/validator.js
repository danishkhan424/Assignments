const fs = require("fs");

// make the validator function and export it.

const validator = (req, res, next) => {
        if(req.body.ID === undefined || req.body.Name === undefined || req.body.Rating === undefined || req.body.Description === undefined || req.body.Genre === undefined || req.body.Cast === undefined ){
          return res.status(400).send("invalid request body.") 
        }

        if (
          req.body &&
          typeof req.body.ID === "number" &&
          // req.body.Name &&
          typeof req.body.Name === "string" &&
          !/\d/.test(req.body.Name) &&
          typeof req.body.Rating === "number" &&
          typeof req.body.Description === "string" &&
          typeof req.body.Genre === "string" &&
          Array.isArray(req.body.Cast) &&
          req.body.Cast.every((item) => typeof item === "string")
        ) {
          fs.appendFileSync("./res.txt", "\nID is a number");

          fs.appendFileSync("./res.txt", "\nName is a string");

          fs.appendFileSync("./res.txt", "\nRating is a number");

          fs.appendFileSync("./res.txt", "\nDescription is a string");

          fs.appendFileSync("./res.txt", "\nGenre is a string");

          fs.appendFileSync("./res.txt", "\nCast is a array of string");

          //   send response when all the data type is in correct format
          res.status(200).send("data received");
        } else {
          fs.appendFileSync(
            "./res.txt","\nbad request.some data is incorrect.");
          res.status(400).send("bad request.some data is incorrect.");
        }

        // calling next to move on to route handler
        next();
      }
     
 


module.exports = validator;
