import { Component, Input, OnChanges } from '@angular/core';
import { WebRequestService } from '../web-request.service';

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

    public constructor(private _webRequest: WebRequestService) {
        this.parkingID = undefined;
        this.errorNoParkingID = true;
        this.model = {
            parkingID: null,
            firstName: null,
            lastName: null,
            time: undefined
        };
    }

    public onSubmit(): void {
        this.model.parkingID = this.parkingID;
        // tslint:disable-next-line:no-console
        if (this.parkingID) {
            this._webRequest.makeReservation(this.model);
            alert('Reservation successful!');
        }
    }
}
