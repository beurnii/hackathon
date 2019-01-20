import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

    public socket: SocketIOClient.Socket;

    public constructor() {
        this.socket = io('http://107.159.46.20:3000');
    }
}
