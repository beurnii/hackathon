import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reservation-parking',
    templateUrl: './reservation-parking.component.html',
    styleUrls: ['./reservation-parking.component.scss']
})
export class ReservationParkingComponent implements OnInit {
    // tslint:disable-next-line:no-any
    public model: any = {};

    public constructor() { }

    public ngOnInit(): void { }

    public onSubmit(): void {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    }
}
