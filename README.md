# Serverless - AWS Node.js Typescript SNS Implementation

A sample serverless project gets note from Http api.The, analyse the sentiment of then note and console log the output based on the score.

Code inspired from https://www.youtube.com/watch?v=9D1ydvuCzs8&list=PLIGDNOJWiL18ETMVbf_-ss7sAn1RcXwks&index=22 for learning

![image](https://user-images.githubusercontent.com/1285344/193191923-d4deed6b-9332-4c03-aadc-c414bd8393b6.png)
![image](https://user-images.githubusercontent.com/1285344/193192035-185bcac9-2a2f-4f13-b7a4-abd2a73c1d95.png)



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
