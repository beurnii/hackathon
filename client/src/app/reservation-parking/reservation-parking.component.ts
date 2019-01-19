import { Component, OnInit, Input } from '@angular/core';

interface Reservation {
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
    private numeroStationnement: string;

    // tslint:disable-next-line:no-any
    private model: Reservation;

    public constructor() {
        this.model = {
            firstName: null,
            lastName: null,
            time: undefined
        };
    }

    public ngOnInit(): void { }

    public onSubmit(): void {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    }
}
