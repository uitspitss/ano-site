import express, { Request, Response } from 'express';
import twitter from 'twitter';
import * as functions from 'firebase-functions';

const router = express.Router({ mergeParams: true });
const config = functions.config();

const client = new twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret,
});

router.get('/user/:screenName', async (req: Request, res: Response) => {
  const result = await client.get('users/show', {
    screen_name: req.params.screenName,
  });
  res.json(result);
});

router.get('/timeline/:screenName', async (req: Request, res: Response) => {
  const result = await client.get('statuses/user_timeline', {
    screen_name: req.params.screenName,
  });
  res.json(result);
});

export default router;
