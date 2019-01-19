import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-deux',
  templateUrl: './menu-deux.component.html',
  styleUrls: ['./menu-deux.component.scss']
})
export class MenuDeuxComponent implements OnInit {

    public title: string = 'TEST';
    public lat: number = 51.678418;
    public lng: number = 7.809007;

    public constructor() { }

    public ngOnInit(): void {}

}
