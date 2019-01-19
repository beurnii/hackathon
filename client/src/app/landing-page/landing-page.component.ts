import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  public title: string = 'TEST';
  public lat: number = 45.50884;
  public lng: number = -73.58781;

  public constructor(private router: Router) { }

  public navigate(uri: string): void {
      this.router.navigateByUrl(uri);
  }

}
