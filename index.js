const { log } = require("console");
const http = require("http");
const PORT = 3000;
console.log("Hello");

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", text / plain);
    res.write("Hello World");
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
