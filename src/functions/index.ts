import * as functions from 'firebase-functions';
import next from 'next';
import path from 'path';
import express, { Request, Response } from 'express';

// const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: false,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
const handle = app.getRequestHandler();

// const config = functions.config();

const server = express();
server.get('*', (req: Request, res: Response) => {
  return handle(req, res);
});

exports.next = functions.https.onRequest(
  async (req: Request, res: Response) => {
    await app.prepare();

    return server(req, res);
  },
);
