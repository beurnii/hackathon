import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

    protected data: Array<any>;

    public async ngOnInit(): Promise<void> {
        this.data = await this.dataService.getParkingData();
    }

    public constructor(private dataService: DataService) {
    }
}
