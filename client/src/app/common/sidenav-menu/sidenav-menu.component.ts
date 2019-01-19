import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
    selector: 'app-sidenav-menu',
    templateUrl: './sidenav-menu.component.html',
    styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

    public constructor(private router: Router) { }

    public ngOnInit(): void {
    }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }
}
