'use strict';
// top of file
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-west-1' });

module.exports.sendEmail = async (event) => {
// inside the `exports.handler.sendEmail` function, before the `return` statement
const params = {
  Destination: {
    ToAddresses: ['lopezkrystal10@gmail.com'], // This should be your email address
  },
  Message: {
    Body: {
      Text: {
        Data: 'This is a message generated automatically from a Lambda function.',
      },
    },
    Subject: {
      Data: 'Hello from Lambda',
    },
  },
  Source: 'lopezkrystal10@gmail.com', // This is the email listed in sender. Set it to your email for this practice
};
await ses.sendEmail(params).promise();
// in the object that is `return`ed, replace the `body.message` property with `Email sent to ${params.Destination.ToAddresses}`

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Email sent to ${params.Destination.ToAddresses}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
