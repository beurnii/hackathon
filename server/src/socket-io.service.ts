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

        this.io.on('connection', (s: socket.Socket) => {
            s.on('reservation', (id: string) => {
                s.broadcast.emit('reservation', id);
            });
        });
    }

    public sendReservation(id: string): void {
      this.io.emit('reservation', id);
    }
}
