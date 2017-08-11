import { Router } from 'express';
import { controller } from './sample.controller';

let router = Router();

router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .get(controller.getById)
    .put(controller.put)
    .delete(controller.delete);

export let sampleRouter = router;