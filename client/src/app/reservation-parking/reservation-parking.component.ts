import { Component, Input, OnChanges } from '@angular/core';
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
export class ReservationParkingComponent implements OnChanges {
    @Input()
    public parkingID: string;
    // tslint:disable-next-line:no-any
    public model: Reservation;
    public errorNoParkingID: boolean;

<<<<<<< HEAD
    public constructor(private _webRequest: WebRequestService) {
        this.parkingID = undefined;
        this.errorNoParkingID = true;
=======
    public constructor(private _webRequest: WebRequestService,
                       private socket: SocketClientService) {
>>>>>>> 418349a728eb1efa03e585a2c5ef68a101156c85
        this.model = {
            parkingID: null,
            firstName: null,
            lastName: null,
            time: undefined
        };
    }

    public onSubmit(): void {
        this.model.parkingID = this.parkingID;
<<<<<<< HEAD
        // tslint:disable-next-line:no-console
        if (this.parkingID) {
            this._webRequest.makeReservation(this.model);
            alert('Reservation successful!');
        }
=======
        this.socket.socket.emit('reservation', this.parkingID);
        this._webRequest.makeReservation(this.model);
>>>>>>> 418349a728eb1efa03e585a2c5ef68a101156c85
    }
}
