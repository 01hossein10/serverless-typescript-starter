import { Handler } from 'aws-lambda';

const baseHandler: Handler = (event: any) => {
  console.log('Hello World');
};

export const handler = baseHandler;
