import * as http from 'http';
import * as socket from 'socket.io';
import { injectable } from 'inversify';

@injectable()
export class SocketServerService {

    public io: SocketIO.Server;

    // tslint:disable-next-line:no-empty
    public constructor() {
    }

    public init(server: http.Server): void {
        this.io = socket(server);
    }

    public sendReservation(id: string): void {
      console.log('ID: ', id);
      this.io.emit('reservation', id);
    }
}
