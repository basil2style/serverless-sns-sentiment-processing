import { APIGatewayProxyEvent } from "aws-lambda/trigger/api-gateway-proxy";
import Sentiment from "sentiment";

/**
 * This is the subscriber event
 * @param event 
 */
export const analyseNote = async (event: any) => {
    console.log(event.Records);
    const note = event.Records[0].Sns.Message;
    const sentiment = new Sentiment();
    const result = sentiment.analyze(note);

    if (result.score > 2) {
        console.log(`Positive note - will be published: ${note}`);
    } else {
        console.log(`Negative note - won't be published: ${note}`);
    }
}