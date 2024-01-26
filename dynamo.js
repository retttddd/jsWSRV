const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  BatchGetCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient([]);
const docClient = DynamoDBDocumentClient.from(client);

module.exports.getBatch = async (batchRequest) => {
  const command = new BatchGetCommand({
    RequestItems: batchRequest,
  });

  return await docClient.send(command);
};
