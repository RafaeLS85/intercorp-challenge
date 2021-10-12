import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { NewClientComponent } from './clients/new-client/new-client.component';

const routes: Routes = [
    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
    { path: 'new-client', component: NewClientComponent , data: { label: 'Agregar clientes' } },
    { path: 'client-list', component: ClientListComponent, data: { label: 'Clientes' } },
    { path: 'client/:id', component: ClientDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }