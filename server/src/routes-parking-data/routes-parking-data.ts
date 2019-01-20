import { injectable } from 'inversify';
import { WebService } from '../WebService';
import { Router, Request, Response } from 'express';
import {MongoDB} from '../BD/MongoDB';

const OK_STATUS: number = 200;

@injectable()
export class RoutesParkingData extends WebService {

    public readonly mainRoute: string;

    public constructor(private mongoDB: MongoDB = new MongoDB()) {
        super();
        this.mainRoute = '';
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get('/getParkingData', (req: Request, res: Response) => {
            this.mongoDB.model.find((err: Error, data: Document) => {
                res.status(OK_STATUS).json(data);
            });
        });

        router.post('/reservation/:id', (req: Request, res: Response) => {
            this.mongoDB.model.findOneAndUpdate({ sNoPlace: req.params.id }, {$set: { Occupation: 1 }}).then((s) => {
                res.status(OK_STATUS).json(s);
            });
        });

        return router;
    }

}
