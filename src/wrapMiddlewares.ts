import { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';
import httpCors from '@middy/http-cors';
import validator from '@middy/validator';
import ajvKeywords from 'ajv-keywords';
import Ajv, { AnySchema } from 'ajv';

export const wrapMiddlewares = (handler: APIGatewayProxyHandler, inputSchema?: AnySchema) => {
  const middlewares = middy(handler).use([
    httpJsonBodyParser(),
    httpEventNormalizer(),
    httpErrorHandler(),
    httpCors(),
  ]);

  if (inputSchema) {
    middlewares.use(validator({
      inputSchema,
      ajvInstance: ajvKeywords(new Ajv) as any,
      ajvOptions: { useDefaults: true },
    }));
  }

  return middlewares;
};
