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
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        FooterComponent,
        LandingPageComponent
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
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA7JRDXYs52tiEAC3fyJ3qdYnnXZtD1MsM'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
