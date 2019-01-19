import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './landing-page/data.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReservationParkingComponent } from './reservation-parking/reservation-parking.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        FooterComponent,
        LandingPageComponent,
        ReservationParkingComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA7JRDXYs52tiEAC3fyJ3qdYnnXZtD1MsM'
        }),
        AmazingTimePickerModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
