import { Component, Input } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { SocketClientService } from '../socket.io-client/socket.io-client.service';

export interface Reservation {
    parkingID: string;
    firstName: string;
    lastName: string;
    time: number;
}

@Component({
    selector: 'app-reservation-parking',
    templateUrl: './reservation-parking.component.html',
    styleUrls: ['./reservation-parking.component.scss'],
})
export class ReservationParkingComponent {
    @Input()
    public parkingID: string;

    // tslint:disable-next-line:no-any
    public model: Reservation;

    public constructor(private _webRequest: WebRequestService,
                       private socket: SocketClientService) {
        this.model = {
            parkingID: null,
            firstName: null,
            lastName: null,
            time: undefined
        };
    }

    public onSubmit(): void {
        this.model.parkingID = this.parkingID;
        this.socket.socket.emit('reservation', this.parkingID);
        this._webRequest.makeReservation(this.model);
    }
}
