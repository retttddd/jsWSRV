const express = require("express");
const bodyParser = require("body-parser");
const ddb = require("./dynamo.js");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get("/api/data", async (req, res) => {
  try {
    const dataFromDynamoDB = await ddb.getBatch({
      pools: {
        Keys: [
          {
            id: "1",
          },
          {
            id: "2",
          },
        ],
        ProjectionExpression: "id, pool_name",
      },
    });

    console.log(`[${new Date().toISOString()}] GET /api/data`);
    res.json(dataFromDynamoDB.Responses.pools);
  } catch (error) {
    console.error(`Error fetching data from DynamoDB: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/data", async (req, res) => {
  const userData = req.body;

  console.log(
    `[${new Date().toISOString()}] POST /api/data - Received data:`,
    userData
  );

  res.status(200).send({ message: "sent successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
