import { injectable, inject } from 'inversify';
import { WebService } from '../WebService';
import { Router, Request, Response } from 'express';
import {MongoDB} from '../BD/MongoDB';
import Types from '../Types';
import { SocketServerService } from '../socket-io.service';

@injectable()
export class RoutesParkingData extends WebService {

    public readonly mainRoute: string;

    public constructor(@inject(Types.SocketServerService) private socket: SocketServerService,
                       private mongoDB: MongoDB = new MongoDB()) {
        super();
        this.mainRoute = '';
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get('/getParkingData', (req: Request, res: Response) => {
            this.mongoDB.model.find((err, data) => {
                res.status(200).json(data);
            });
        });

        router.post('/reservation/:id', (req: Request, res: Response) => {
            // tslint:disable-next-line:no-console
            console.log("Requete de reservation recu avec l'ID " + req.params.id);
            this.socket.sendReservation(req.params.id);
        });

        return router;
    }

}
