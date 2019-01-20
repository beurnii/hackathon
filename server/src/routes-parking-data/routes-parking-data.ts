import { injectable } from 'inversify';
import { WebService } from '../WebService';
import { Router, Request, Response } from 'express';
// tslint:disable-next-line:no-any
const csv: any = require('csvtojson');

const STATUS_OK: number = 200;

@injectable()
export class RoutesParkingData extends WebService {

    public readonly mainRoute: string;

    public constructor() {
        super();
        this.mainRoute = '';
    }

    public get routes(): Router {
        const router: Router = Router();

        // router.get('/getParkingData', (req: Request, res: Response) => {

        // const a = new this.mongoDB.model({
        //     sNoPlace: 'ert',
        //     nLongitude: 34,
        //     nLatitude: 234,
        //     nPositionCentreLongitude: 234,
        //     nPositionCentreLatitude: 23,
        //     Occupation: 234,
        //     sStatut: 234,
        //     sGenre: 'efs',
        //     sType: 'wer',
        //     sAutreTete: 'wer',
        //     sNomRue: 'ert',
        //     nSupVelo: 0,
        //     sTypeExploitation: 'wwet',
        //     nTarifHoraire: 234,
        //     sLocalisation: 'wer',
        //     nTarifMax: 'wet'
        // });
        // a.save().then((err)=>{console.log(err)});

        router.get('/getParkingData', (req: Request, res: Response) => {
            csv()
                .fromFile('./Places.csv')
                // tslint:disable-next-line:no-any
                .then((jsonObj: any) => {
                    res.status(STATUS_OK).json(jsonObj);
                });
        });

        router.post('/reservation/:id', (req: Request, res: Response) => {
            // tslint:disable-next-line:no-console
            console.log("Requete de reservation recu avec l'ID " + req.params.id);
        });

        return router;
    }

}
