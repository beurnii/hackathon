import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    // tslint:disable-next-line:no-any
    protected data: Array<any>;
    public positions: Map<number, number>;
    public reservation: Map<number, number>;

    public lat: number;
    public lng: number;

    public noUniqueParking: string;

    public async ngOnInit(): Promise<void> {
    }

    public constructor(
        private router: Router,
        private dataService: DataService) {
        this.reservation = new Map<number, number>();
        this.getLocation();
        this.noUniqueParking = null;
        this.loadingPlaces();
    }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }



    public onMarkerClick(lat: number, lng: number): void {
        this.data.forEach((d) => {
            if ((lat === d.nPositionCentreLatitude) && (lng === d.nPositionCentreLongitude)) {
                this.noUniqueParking = d.sNoPlace;
                console.log(this.noUniqueParking);
                this.reservation.clear();
                this.reservation.set(lat, lng);

                document.querySelector('#reservation-container').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    private getLocation(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.lat = pos.coords.latitude;
                this.lng = pos.coords.longitude;
            });
        }
    }

    public async loadingPlaces() {
        this.positions = new Map<number, number>();

        if (this.data === undefined) {
            this.data = await this.dataService.getParkingData();
        }
        this.data.forEach((d) => {
            if (d.Occupation != 1) {
                this.positions.set(d.nPositionCentreLongitude as number, d.nPositionCentreLatitude as number);
            }
        });
    }
}
