import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from './data.service';
import { SocketClientService } from '../socket.io-client/socket.io-client.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    // tslint:disable-next-line:no-any
    protected data: Array<any>;
    public positions: Map<string, Array<number>>;
    public positionReservation: Map<string, Array<number>>;
    public reservationErrorMessage: string;

    public lat: number;
    public lng: number;
    public hourglass: Boolean;

    public noUniqueParking: string;

    public async ngOnInit(): Promise<void> {
        this.setSocketOnEvents();
    }

    public constructor(private router: Router,
                       private dataService: DataService,
                       private socket: SocketClientService) {
        this.hourglass = true;
        this.positionReservation = new Map<string, Array<number>>();
        this.reservationErrorMessage = '';
        this.getLocation();
        this.noUniqueParking = null;
        this.loadingPlaces();
    }

    private setSocketOnEvents(): void {
        this.socket.socket.on('reservation', (id: string) => {
            this.positions.delete(id);
            if (this.positionReservation.has(id)) {
                this.reservationErrorMessage = 'Sorry! This parking spot has been taken';
                this.positionReservation.clear();
            }
        });

        this.socket.socket.on('reservationOver', (parkingSpot: any) => {
            if (this.positionReservation.has(parkingSpot.sNoPlace)) {
                this.positionReservation.clear();
            }
            this.positions.set(parkingSpot.sNoPlace, [parkingSpot.nPositionCentreLatitude, parkingSpot.nPositionCentreLongitude]);
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

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }

    public onMarkerClick(id: string, position: Array<number>): void {
        this.data.forEach((d) => {
            const lat: number = position[0];
            const lng: number = position[1];
            if (id === d.sNoPlace) {
                this.noUniqueParking = d.sNoPlace;
                this.positionReservation.clear();
                const arrayPosition: Array<number> = [lat, lng];
                this.positionReservation.set(this.noUniqueParking, arrayPosition);
                this.reservationErrorMessage = '';

                document.querySelector('#reservation-container').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    public async loadingPlaces(): Promise<void> {
        this.positions = new Map<string, Array<number>>();

        if (!this.data) {
            this.data = await this.dataService.getParkingData();
        }

        this.data.forEach((d) => {
            if (d.Occupation !== 1) {
                const arrayPosition: Array<number> = [d.nPositionCentreLatitude as number, d.nPositionCentreLongitude as number];
                this.positions.set(d.sNoPlace, arrayPosition);
            }
        });

        setTimeout(() => {
            this.hourglass = false;
        }, 500);
    }
}
