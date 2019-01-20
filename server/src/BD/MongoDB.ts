import { Mongoose, Schema, Model, Document } from 'mongoose';
import { injectable } from 'inversify';

const DB_URL: string = 'mongodb://camarois:admin1@ds161794.mlab.com:61794/hackathon';

@injectable()
export class MongoDB {
    private _mongoose: Mongoose;
    private _schema: Schema;
    private _model: Model<Document>;

    get model(): Model<Document> {
        return this._model;
    }

    constructor() {
        this._mongoose = new Mongoose();
        this._schema = new Schema({
          sNoPlace: String,
          nLongitude: Number,
          nLatitude: Number,
          nPositionCentreLongitude: Number,
          nPositionCentreLatitude: Number,
          Occupation: Number,
          sStatut: Number,
          sGenre: String,
          sType: String,
          sAutreTete: String,
          sNomRue: String,
          nSupVelo: Number,
          sTypeExploitation: String,
          nTarifHoraire: Number,
          sLocalisation: String,
          nTarifMax: String
        });

        this._model = this._mongoose.model('parkingPlaces', this._schema);
        this.connectToBD().catch();
    }

    private async connectToBD(): Promise<void> {
        await this._mongoose.connect(DB_URL, { useNewUrlParser: true }).catch(() => {
            console.log("Error while connecting to the BD.");
        });
    }

    public isConnected(): boolean {
        return this._mongoose.connection.readyState === 1;
    }
}
