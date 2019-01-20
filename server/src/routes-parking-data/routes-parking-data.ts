import { injectable } from 'inversify';
import { WebService } from '../WebService';
import { Router, Request, Response } from 'express';
const csv = require('csvtojson');

@injectable()
export class RoutesParkingData extends WebService {

  public readonly mainRoute: string;

  public constructor() {
    super();
    this.mainRoute = '';
  }

  public get routes(): Router {
    const router: Router = Router();

    router.get('/getParkingData', (req: Request, res: Response) => {
      csv()
      .fromFile('./Places.csv')
      .then((jsonObj: any) => {
        res.status(200).json(jsonObj);
      });
    });

    router.post('/reservation/:id', (req: Request, res: Response) => {
        // res.send("Requete de reservation recu avec l'ID " + req.params.id);
        console.log("Requete de reservation recu avec l'ID " + req.params.id);
    });

    return router;
  }

}
