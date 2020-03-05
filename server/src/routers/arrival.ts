import * as express from 'express';
import { Arrival } from '../models/arrival';

const arrivalRoutes = express.Router();

arrivalRoutes.post('/arrivals', async (req: express.Request, res: express.Response) => {
    const arrival = new Arrival(req.body);
    try {
        await arrival.save();
        console.log('request body: ', req.body);
        res.status(201).send(arrival);
    } catch (e) {
        res.status(400).send(e)
    }
})

arrivalRoutes.patch('/arrivals/:id', async (req: express.Request, res: express.Response) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['arrivedAt'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try{
        await Arrival.findByIdAndUpdate(req.params.id, {
            $set: {
                arrivedAt: req.body.arrivedAt
            }
        })
        res.status(201).send(req.body);
    }catch(e) {
        res.status(400).send(e)
    }

    // res.send({
    //     params: req.body,
    //     id: req.params.id
    // });
})

arrivalRoutes.get('/arrivals/:id', async (req: express.Request, res: express.Response) => {
    try {
        const arrival = await Arrival.find({
            _id: req.params.id
        });
        res.send(arrival);
    } catch (e) {
        res.status(400).send(e)
    }
})

arrivalRoutes.get('/arrivals', async (req: express.Request, res: express.Response) => {
    try {
        const arrivals = await Arrival.find({});
        res.send(arrivals);
    } catch (e) {
        res.status(400).send(e)
    }
})

arrivalRoutes.delete('/arrivals/:id', async (req: express.Request, res: express.Response) => {
    try{
        await Arrival.findByIdAndDelete(req.params.id);
        res.status(201).send(req.body);
    }catch(e) {
        res.status(400).send(e)
    }
})

export { arrivalRoutes };