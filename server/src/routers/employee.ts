import * as express from 'express';
import { Employee } from '../models/employee';

const employeeRoutes = express.Router();

employeeRoutes.post('/employees', async (req: express.Request, res: express.Response) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        console.log('request body: ', req.body);
        res.status(201).send(employee);
    } catch (e) {
        res.status(400).send(e)
    }
})

employeeRoutes.patch('/employees/:id', async (req: express.Request, res: express.Response) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try{
        await Employee.findByIdAndUpdate(req.params.id, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
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

employeeRoutes.get('/employees/:id', async (req: express.Request, res: express.Response) => {
    try {
        const employee = await Employee.find({
            _id: req.params.id
        });
        res.send(employee);
    } catch (e) {
        res.status(400).send(e)
    }
})

employeeRoutes.get('/employees', async (req: express.Request, res: express.Response) => {
    try {
        const employees = await Employee.find({});
        res.send(employees);
    } catch (e) {
        res.status(400).send(e)
    }
})

employeeRoutes.delete('/employees/:id', async (req: express.Request, res: express.Response) => {
    try{
        await Employee.findByIdAndDelete(req.params.id);
        res.status(201).send(req.body);
    }catch(e) {
        res.status(400).send(e)
    }
})

export { employeeRoutes };