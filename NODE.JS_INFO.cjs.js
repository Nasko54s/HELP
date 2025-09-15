"use strict";

//? File System Module
// const fs = require('fs');
// const fsPromises = require('fs').promises;

//? WAY 1
// fs.readFile("./NodeJS Test/data/start.txt", (err, data) => {
//     if (err){
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
    
//     fs.writeFile("./NodeJS Test/data/end.txt", data, (err) => {
//         if (err){
//             console.error(err);
//             return;
//         }
//         console.log("Write Complete!");

//         fs.appendFile("./NodeJS Test/data/end.txt", data, (err) => {
//             if (err){
//                 console.error(err);
//                 return;
//             }
//             console.log("Append Complete!");
//         });
//     });
// });

//? WAY 2
// const data = await fsPromises.readFile("./NodeJS Test/data/start.txt", {encoding: "utf-8"}).then(data => {
//     const formattedData = data.toString();
//     console.log(formattedData);
//     return formattedData;
// }).catch(err => console.error(err));

// await fsPromises.writeFile("./NodeJS Test/data/end.txt", data).then(() => console.log("Write successful!")).catch(err => console.error(err));
// await fsPromises.appendFile("./NodeJS Test/data/end.txt", data).then(() => console.log("Append successful!")).catch(err => console.error(err));

//? WAY 3
// async function processFile() {
//     try{
//         //* Read and format data
//         const rawData = await fsPromises.readFile("./NodeJS Test/data/start.txt", {
//             encoding: "utf-8",
//         });
//         const formattedData = rawData.toString();
//         console.log(formattedData);

//         //* Write to file
//         await fsPromises.writeFile("./NodeJS Test/data/end.txt", formattedData);
//         console.log("Write successful!");

//         //* Append to file
//         await fsPromises.appendFile("./NodeJS Test/data/end.txt", formattedData);
//         console.log("Append successful!");
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// processFile();

//? OS Module
// const os = require('os');

// console.log("OS Information:");
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus().length);
// console.log(os.EOL === "\n" ? "LF" : "CRLF");

//? Path Module
// const path = require('path');

// console.log("Path Information:");
// console.log(path.sep);
// console.log(path.delimiter);
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.basename(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__dirname, "test", "hello.html"));
// console.log(path.resolve(__dirname, "test", "hello.html"));
// console.log(__dirname); //* Undefined in ES6 module scope
// console.log(__filename); //* Undefined in ES6 module scope

//? Simple HTTP Server
// const http = require('http');
// const PORT = 3500;
// const server = http.createServer((req, res) => {
//     //* res.statusCode = 200;
//     //* res.statusMessage = "Success!";
//     //* res.setHeader("Content-Type", "text/plain");

//     //* res.writeHead(200, "Success!", {"Content-Type":"text/plain"});

//     res.end("Hello World!");
// });

// server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

//? Improved HTTP Server with Routing and File Handling
// const path = require("path");
// const http = require('http');
// const PORT = 3500;
// const server = http.createServer((req, res) => {
//     const {url, method} = req;

//     if (url === "/" && method === "GET"){

//         HandlePage(res);
//     }
//     else if (url === "/data/start" && method === "GET"){
//         HandlePage(res, {name: "start.txt", filePath: "/data"});
//     }
//     else if (url === "/data/end" && method === "GET"){
//         HandlePage(res, {name: "end.txt", filePath: "/data"});
//     }
//     else{
//         HandlePage(res, {name: "404", statusCode: 404});
//     }
// });

// server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

// function HandlePage(res, {
//     name="index", 
//     type="text/html", 
//     filePath="", 
//     statusCode=200
// } = {}){
//     const fullPath = path.join(__dirname, filePath,`${name.split(".").pop() === name ? name + ".html" : name}`);
//     fs.readFile(fullPath, type.startsWith("text/") ? "utf-8" : null, (err, data) => {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Internal Server Error" + err.message);
//             return;
//         }
//         res.writeHead(statusCode, { "Content-Type": type }); //* To display an html file, it must read it first
//         res.end(data);
//     });
// }

//? URL Module
// const { URL } = require('url');

// const myURL = new URL("http://user:pass@www.example.com:8000/path/name?query=string#hash");
// console.log(`Host: ${myURL.host}`);
// console.log(`Hostname: ${myURL.hostname}`);
// console.log(`Pathname: ${myURL.pathname}`);
// console.log(`Search: ${myURL.search}`);
// console.log(`Hash: ${myURL.hash}`);
// console.log(`Href: ${myURL.href}`);
// console.log(`Origin: ${myURL.origin}`);
// console.log(`Port: ${myURL.port}`);
// console.log(`Protocol: ${myURL.protocol}`);
// console.log(`Username: ${myURL.username}`);
// console.log(`Password: ${myURL.password}`);
// myURL.searchParams.append("key", "value");
// console.log(`Updated Search Params: ${myURL.searchParams}`);
// myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

//? Events Module

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();
// customEmitter.on("response", (name, id) => {
//     console.log(`Data received: Name - ${name}, ID - ${id}`);
// });

// customEmitter.on("response", () => {
//     console.log("Some other logic here");
// });

// customEmitter.emit("response", "Nasko", 34); //* Emits the event

//* EventEmitter has methods like on, once, off, emit, removeListener, removeAllListeners, listenerCount, prependListener, prependOnceListener
//* The maximum number of listeners for an event is 10 by default, can be changed using setMaxListeners() method
//* The method listenerCount() returns the number of listeners for a specific event
//* The method rawListeners() returns the array of listeners for a specific event
//* The method eventNames() returns the array of event names
//* The method getMaxListeners() returns the maximum number of listeners for an event
//* The method emit() returns a boolean indicating if the event had listeners or not
//* The method off() is an alias for removeListener()
//* The method removeListener() removes a specific listener for an event
//* The method removeAllListeners() removes all listeners for a specific event or all events if no event is specified
//* The method prependListener() adds a listener to the beginning of the listeners array for a specific event
//* The method prependOnceListener() adds a one-time listener to the beginning of the listeners array for a specific event
//* The method once() adds a one-time listener for an event

//? Streams

// const fs = require('fs');
// const fsPromises = require('fs').promises;
// const readPath = "./NodeJS Test/data/start.txt";
// const writePath = "./NodeJS Test/data/end.txt";

//? Read Stream

// const readStream = fs.createReadStream(readPath);
// readStream.on("data", (chunk) => {
//     console.log(`Chunk: ${chunk}`); //* Emits data in chunks
// })

//* Has data, end and error events

// readStream.once("end", () => console.log("Data Reading Finished!"));

//? Write Stream

// const writeStream = fs.createWriteStream(writePath);
// writeStream.write("WriteStream wrote this", (err) => {
//     if (err){
//         console.error(err);
//     }
//     console.log("Writing Finished!");
//     writeStream.end(); //* Closes the stream
// });
//* The method write() returns a boolean indicating if the internal buffer is full or not
//* Has finish, error and drain events
//* drain event is emitted when the internal buffer is emptied

//? Stream Piping

// readStream.pipe(writeStream); //* Reads the file stream and writes it to the write stream
// readStream.unpipe(writeStream); //* Stops piping the read stream to the write stream

//? Duplex Streams

// const { Duplex } = require('stream');
// const duplex = new Duplex({
//     readableObjectMode: true, //* allows pushing objects
//     writableObjectMode: true, //* allows writing objects
//     highWaterMark: 16, //* buffer size in chunks
// });


//? Transform Streams

// const { Transform } = require('stream');

//? Crypto Module

// const crypto = require('crypto');

// const algorithm = "aes-256-cbc";
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// function encrypt(text){
//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     let encrypted = cipher.update(text, "utf-8", "hex");
//     encrypted += cipher.final("hex");
//     return encrypted;
// }

// function decrypt(encrypted){
//     const decipher = crypto.createDecipheriv(algorithm, key, iv);
//     let decrypted = decipher.update(encrypted, "hex", "utf-8");
//     decrypted += decipher.final("utf-8");
//     return decrypted;
// }

// const text = "Hello World!";
// const encrypted = encrypt(text);
// const decrypted = decrypt(encrypted);
// console.log(`Text: ${text}`);
// console.log(`Encrypted: ${encrypted}`);
// console.log(`Decrypted: ${decrypted}`);

// function hash(text){
//     return crypto.createHash("sha256").update(text).digest("hex");
// }

// const hashed = hash(text);
// console.log(`Hashed: ${hashed}`);

//* HMAC - Hash-based Message Authentication Code

// function hmac(text, secret){
//     return crypto.createHmac("sha256", secret).update(text).digest("hex");
// }

// const secret = "mysecret";
// const hmaced = hmac(text, secret);
// console.log(`HMAC: ${hmaced}`);

//* PBKDF2 - Password-Based Key Derivation Function 2

// function pbkdf2(password, salt){
//     return crypto.pbkdf2Sync(password, salt, 100000, 64, "sha256").toString("hex");
// }
// const salt = crypto.randomBytes(16).toString("hex");
// const pbkdf2ed = pbkdf2(text, salt);
// console.log(`PBKDF2: ${pbkdf2ed}`);

//* Digital Signatures

// const { generateKeyPairSync, sign, verify } = require('crypto');
// const { privateKey, publicKey } = generateKeyPairSync("rsa", {
//     modulusLength: 2048,
// });
// const dataToSign = "Important Data";
// const signature = sign("sha256", Buffer.from(dataToSign), {
//     key: privateKey,
//     padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
// });
// const isVerified = verify("sha256", Buffer.from(dataToSign), {
//     key: publicKey,
//     padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
// }, signature);
// console.log(`Signature: ${signature.toString("hex")}`);
// console.log(`Is Verified: ${isVerified}`);
