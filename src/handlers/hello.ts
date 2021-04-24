import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { wrapMiddlewares } from '../wrapMiddlewares';

const helloAction: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};

export const hello = wrapMiddlewares(helloAction);
