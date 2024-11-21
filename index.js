const http = require("http");
const PORT = 3000;
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("Hello World");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  })
  .listen(3000, () => {
    console.log(`Server is running on port: ${PORT}.`);
  });
