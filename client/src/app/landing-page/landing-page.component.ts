import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from './data.service';

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

    public title: string = 'TITRE';
    public lat: number;
    public lng: number;

    private bounds: any;

    public async ngOnInit(): Promise<void> {
    }

    public constructor(private router: Router,
                       private dataService: DataService) {
        this.reservation = new Map<number, number>();
        this.getLocation();
    }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }



    public onMarkerClick(lat: number, lng: number): void {
        this.data.forEach((d) => {
            if ((lat === d.nPositionCentreLatitude) && (lng === d.nPositionCentreLongitude)) {
                this.reservation.clear();
                this.reservation.set(lat, lng);
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


    public boundsChange(bounds: any){
        this.bounds = bounds;
    }

    public async idle() {
        this.positions = new Map<number, number>();

        if (this.data === undefined) {
            this.data = await this.dataService.getParkingData();
        }
        this.data.forEach((d) => {
            const pos = {
                lat: parseFloat(d.nPositionCentreLatitude),
                lng: parseFloat(d.nPositionCentreLongitude)
            };
            if (this.bounds.contains(pos) && !this.positions.has(d.nPositionCentreLongitude) && d.Occupation != 1) {
                this.positions.set(d.nPositionCentreLongitude as number, d.nPositionCentreLatitude as number);
            }
        });
    }
}
