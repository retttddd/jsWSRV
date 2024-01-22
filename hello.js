const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let mockDB = [
  { id: 1, pool_name: "Item 1" },
  { id: 2, pool_name: "Item 2" },
  { id: 3, pool_name: "Item 3" },
];

// logging middleware
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//   next();
// });

// parce middleware
app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  console.log(`[${new Date().toISOString()}] GET /api/data`);
  res.json(mockDB);
});

app.post("/api/data", (req, res) => {
  const userData = req.body;

  console.log(
    `[${new Date().toISOString()}] POST /api/data - Received data:`,
    userData
  );

  res.status(200).send({ message: "sent succesfully" });
});

// logging middleware
// app.use((req, res, next) => {
//   console.log(
//     `[${new Date().toISOString()}] Responded with status ${res.statusCode}`
//   );
//   next();
// });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
