import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from './data.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit  {
    // tslint:disable-next-line:no-any
    protected data: Array<any>;
    public positions: Map<number, number>;

    public title: string = 'TITRE';
    public lat: number;
    public lng: number;

    public async ngOnInit(): Promise<void> {
<<<<<<< HEAD
        this.positions = new Map<number, number>();
        this.data = await this.dataService.getParkingData();
        console.log(this.data[0]);
        this.data.forEach((d) => {
            if (d.Occupation != 1) this.positions.set(d.nPositionCentreLongitude as number, d.nPositionCentreLatitude as number);
        });
        console.log(this.positions.size);
=======

>>>>>>> master
    }

    public constructor(private router: Router,
                       private dataService: DataService) {
        this.getLocation();
    }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }

    public async checkMarkersInBounds(bounds: any): Promise<void> {
        if (this.data === undefined) {
            this.positions = new Map<number, number>();
            this.data = await this.dataService.getParkingData();
        }
        let timeout: number;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            this.data.forEach((d) => {
                const pos = {lat: parseFloat(d.nPositionCentreLatitude), lng: parseFloat(d.nPositionCentreLongitude)};
                if (bounds.contains(pos) && !this.positions.has(d.nPositionCentreLongitude)) {
                    this.positions.set(d.nPositionCentreLongitude as number, d.nPositionCentreLatitude as number);
                }
            });
        }, 500);
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
