const fs = require("fs");
const { Console } = require("console")

const logStream = fs.createWriteStream("stdout.log", { flags: "a" });
const errorStream = fs.createWriteStream("stderr.log", { flags: "a" });

const logger = new Console({
    stdout: logStream,
    stderr: errorStream,
  });

  console.log = (...args) => {
    const message = args.join(" ");
    const date = new Date().toISOString();
    logStream.write(`${date} - LOG: ${message}\n`);
    process.stdout.write(`${date} - LOG: ${message}\n`);
  };
  
  console.error = (...args) => {
    const message = args.join(" ");
    const date = new Date().toISOString();
    errorStream.write(`${date} - ERROR: ${message}\n`);
    process.stderr.write(`${date} - ERROR: ${message}\n`);
  };