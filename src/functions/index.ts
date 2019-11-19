import * as functions from 'firebase-functions';
import next from 'next';
import path from 'path';
import express, { Request, Response } from 'express';

import api from './api/v1';

// const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: false,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
const handle = app.getRequestHandler();

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routes
server.use('/api/v1', api);

server.get('/:screenName', (req: Request, res: Response) => {
  return app.render(req, res, '/', { screenName: req.params.screenName });
});

server.get('*', (req: Request, res: Response) => {
  return handle(req, res);
});

exports.next = functions
  .region('asia-northeast1')
  .https.onRequest(async (req: Request, res: Response) => {
    await app.prepare();

    return server(req, res);
  });
