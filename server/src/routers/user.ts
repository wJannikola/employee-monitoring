import * as express from 'express';
import { User } from '../models/user';

const userRoutes = express.Router();

userRoutes.post('/users', async (req: express.Request, res: express.Response) => {
    const user = new User(req.body);
    try {
        await user.save();
        console.log('request body: ', req.body);
        res.status(201).send(user);
    } catch(e) {
        res.status(400).send(e)
    }
})

export { userRoutes };