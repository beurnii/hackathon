import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuUnComponent } from '../menu-un/menu-un.component';
import { MenuDeuxComponent } from '../menu-deux/menu-deux.component';

const routes: Routes = [
    { path: 'menu1', component: MenuUnComponent },
    { path: 'menu2', component: MenuDeuxComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
