# Typescript template with @middy middlewares for Serverless Framework projects

## What's included
* Folder structure used consistently across our projects.
* Middy middlewares, including error handler, json body parser, ajv validation
* Typescript with babel preset configured
* Build with webpack from `src/index.ts` into `dist/index.js`
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.

## Getting started
```
sls create --name PROJECT_NAME --template-url https://github.com/7binary/sls-middy
cd PROJECT_NAME
yarn install
```

## Deploy
```
yarn dep
```

You are ready to go!
