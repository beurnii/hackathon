import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-deux',
  templateUrl: './menu-deux.component.html',
  styleUrls: ['./menu-deux.component.scss']
})
export class MenuDeuxComponent implements OnInit {

    public title: string = 'TEST';
    public lat: number = 45.50884;
    public lng: number = -73.58781;

    public constructor() { }

    public ngOnInit(): void {}

}
