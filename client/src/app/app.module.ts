import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { SidenavMenuComponent } from './common/sidenav-menu/sidenav-menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuUnComponent } from './menu-un/menu-un.component';
import { MenuDeuxComponent } from './menu-deux/menu-deux.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        SidenavMenuComponent,
        FooterComponent,
        MenuUnComponent,
        MenuDeuxComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
