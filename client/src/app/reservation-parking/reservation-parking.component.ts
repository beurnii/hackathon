import { Component, OnInit, Input } from '@angular/core';

interface Reservation {
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
    private model: Reservation;

    public constructor() {
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
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    }
}
