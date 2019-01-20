import { Injectable } from '@angular/core';
import { Reservation } from './reservation-parking/reservation-parking.component';
import { HttpClient } from '@angular/common/http';

const BASE_URL: string = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class WebRequestService {

    public constructor(private _http: HttpClient) { }

    public makeReservation(reservation: Reservation): void {
        const url: string = BASE_URL + 'reservation/' + reservation.parkingID + '/' + reservation.time;
        this._http.post(url, reservation).toPromise();
    }
}
