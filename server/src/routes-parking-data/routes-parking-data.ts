import { injectable } from 'inversify';
import { WebService } from '../WebService';
import { Router, Request, Response } from 'express';
import * as fs from 'fs';
const csv = require('csvtojson');
// const csv = require('csv-parser');
// import * as csv from 'csv-parser';

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

    return router;
  }

}
