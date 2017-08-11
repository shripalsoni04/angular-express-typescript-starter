import { Router } from 'express';
import { sampleRouter } from './sample/sample.router';

let router = Router();
router.use('/sample', sampleRouter);

export let apiRouter = router;

