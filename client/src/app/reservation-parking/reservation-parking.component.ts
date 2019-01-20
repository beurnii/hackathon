import { Component, OnInit, Input } from '@angular/core';
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
    styleUrls: ['./reservation-parking.component.scss']
})
export class ReservationParkingComponent implements OnInit {
    @Input()
    public parkingID: string;

    // tslint:disable-next-line:no-any
    public model: Reservation;

    public constructor(private _webRequest: WebRequestService) {
        this.model = {
            parkingID: null,
            firstName: null,
            lastName: null,
            time: undefined
        };
    }

    public ngOnInit(): void {
        this.model.parkingID = this.parkingID;
    }

    public onSubmit(): void {
        // tslint:disable-next-line:no-console
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
        this._webRequest.makeReservation(this.model);
    }
}
