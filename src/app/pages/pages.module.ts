import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PageRoutingModule } from './pages-routing.module';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { SpinnersAngularModule } from 'spinners-angular';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [NewClientComponent, NavbarComponent, ClientListComponent, ClientDetailComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    SpinnersAngularModule,
    MaterialModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  exports:[NavbarComponent]
})
export class PagesModule { }
