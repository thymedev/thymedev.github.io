const { MongoClient } = require("mongodb");

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

async function getData() {
  const uri = process.env.mongodbUri;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const test = await client
      .db(process.env.mongoclientDb)
      .collection(process.env.mongoclientCollection)
      .find({})
      .sort({name:1})
      .toArray();
    return test;
  } catch (err) {
    console.log(err); // output to netlify function log
  } finally {
    await client.close();
  }
}

exports.handler = async function(event, context) {
  // Add CORS support
  // https://stackoverflow.com/a/57974136/15923512
  switch (event.httpMethod) {
    case 'GET':
      try {
        const data = await getData();
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(data)
        };
      } catch (err) {
        console.log(err); // output to netlify function log
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ msg: err.message }) 
        };
      }
    case 'OPTIONS':
      return {
        statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
        headers,
        body: 'Ping :)'
      };
  }
};
