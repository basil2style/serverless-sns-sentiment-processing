# Serverless - AWS Node.js Typescript SNS Implementation

A sample serverless project gets note from Http api.The, analyse the sentiment of then note and console log the output based on the score.

Code inspired from https://www.youtube.com/watch?v=9D1ydvuCzs8&list=PLIGDNOJWiL18ETMVbf_-ss7sAn1RcXwks&index=22 for learning




## Prerequisites

- [`serverless-framework`](https://github.com/serverless/serverless)
- [`node.js`](https://nodejs.org)

## Serverless Template

To create new serverless AWS TypeScript project using this template run:

```bash
serverless create \
--template-url https://github.com/ttarnowski/serverless-aws-nodejs-typescript-v2/tree/main \
--path myServiceName
```

## Functions 

1) addNote.ts -> This is a http api that gets note parameter from the api. This has the publisher funciton, so it sends the message to SNS. 
2) analyseNote.ts -> This is the subscriber function for the SNS topic "analyseNote".


## Licence

MIT.
