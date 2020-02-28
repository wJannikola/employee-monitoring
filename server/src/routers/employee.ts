import * as express from 'express';
import { Employee } from '../models/employee';

const employeeRoutes = express.Router();

employeeRoutes.post('/employees', async (req: express.Request, res: express.Response) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        console.log('request body: ', req.body);
        res.status(201).send(employee);
    } catch(e) {
        res.status(400).send(e)
    }
})

employeeRoutes.get('/employees', async (req: express.Request, res: express.Response) => {
    try{
        const employees = await Employee.find({});
        res.send(employees);
    }catch(e) {
        res.status(400).send(e)
    }
})

export { employeeRoutes };