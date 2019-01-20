import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from './data.service';
import { SocketClientService } from '../socket.io-client/socket.io-client.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit  {
    // tslint:disable-next-line:no-any
    protected data: Array<any>;
    public positions: Map<number, number>;
    public reservation: Map<number, number>;

    public title: string = 'TITRE';
    public lat: number;
    public lng: number;

    public async ngOnInit(): Promise<void> {
        this.socket.socket.on('reservation', (id: string) => {
            console.log(id);
        });
    }

    public constructor(private router: Router,
                       private dataService: DataService,
                       private socket: SocketClientService) {
        this.reservation = new Map<number, number>();
        this.getLocation();
    }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }

    public async checkMarkersInBounds(bounds: any): Promise<void> {

        this.positions = new Map<number, number>();
        if (this.data === undefined) {
            this.positions = new Map<number, number>();
            this.data = await this.dataService.getParkingData();
        }
        console.log(this.data[0]);

        let timeout: number;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            this.data.forEach((d) => {
                const pos = {lat: parseFloat(d.nPositionCentreLatitude), lng: parseFloat(d.nPositionCentreLongitude)};
                if (bounds.contains(pos) && !this.positions.has(d.nPositionCentreLongitude) && d.Occupation != 1) {
                    this.positions.set(d.nPositionCentreLongitude as number, d.nPositionCentreLatitude as number);
                }
            });
            console.log(this.positions.size);
        }, 500);
    }

    public onMarkerClick(lat: number, lng: number): void {
        this.data.forEach((d) => {
            if ((lat === d.nPositionCentreLatitude) && (lng === d.nPositionCentreLongitude)) {
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

}
