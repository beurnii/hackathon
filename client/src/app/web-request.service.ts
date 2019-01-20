import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './reservation-parking/reservation-parking.component';

const BASE_URL: string = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class WebRequestService {

    public constructor(private _http: HttpClient) { }

    public async makeReservation(reservation: Reservation): Promise<void> {
        await this._http.put(BASE_URL + 'reservation/' + reservation.parkingID, reservation);
    }
}
