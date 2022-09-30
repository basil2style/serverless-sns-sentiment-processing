import { Context, APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyCallback } from "aws-lambda";
import AWS, { config } from 'aws-sdk';

const sns = new AWS.SNS();

const headers = {
    "content-type": "application/json",
};



/**
 * This is the publisher event
 * @param event 
 * @param context 
 * @param callback 
 */

export const addNote = async (event: APIGatewayProxyEvent, context: Context, callback: APIGatewayProxyCallback): Promise<APIGatewayProxyResult> => {
    const data = (typeof event.body === "string") ? JSON.parse(event.body as string) : event.body;;
    console.log(context.invokedFunctionArn);
    const awsAccountId = "094590313793"
    const params = {
        Message: data.note,
        TopicArn: `arn:aws:sns:us-east-1:${awsAccountId}:analyseNote`
    }

    sns.publish(params, (error) => {
        console.log("From sns publish")
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t add the note due an internal error. Please try again later.',
            });
        }
        // create a resonse
        const response = {
            statusCode: 200,
            body: JSON.stringify({ message: 'Successfully added the note.' }),
        };
        callback(null, response);
    });
})
    
};
