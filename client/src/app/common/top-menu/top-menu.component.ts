import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
    @Input()
    public myCallback: Function;

    public constructor(private router: Router) { }

    public navigate(uri: string): void {
        this.router.navigateByUrl(uri);
    }
}
