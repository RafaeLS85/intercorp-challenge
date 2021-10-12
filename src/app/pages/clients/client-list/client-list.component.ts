import { Component, AfterViewInit } from '@angular/core';
import { ClientService } from '../services/clients.service';
import { Router } from '@angular/router';
import { ClientModel } from '../models/clients.model';
import Swal from 'sweetalert2';
import { getAge } from '../utils/share-functions';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'lastName',
    'age',
    'birthdate',
    'actions',
  ];
  dataSource: ClientModel[];
  clients: ClientModel[] = [];
  isLoading = true;

  constructor(private service: ClientService, private router: Router) {}

  goToDetail(e) {
    this.router.navigate(['client', e.id]);
  }

  onDelete(item) {
    Swal.fire({
      title: 'Eliminar cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteClient(item);
        Swal.fire('Borrado!', 'El cliente fue eliminado de la lista.', 'success');
      }
    });
  }

  getAverageAge(clients) {
    return (
      clients.reduce((prev, client) => prev + client.age, 0) / clients.length
    );
  }
  
  getStandardDeviationOfSample() {
    const x_x = this.clients.map(
      (c) => c.age - this.getAverageAge(this.clients)
    );
    const x_x_pow = x_x.map((e) => Math.pow(e, 2));
    const sum = x_x_pow.reduce((prev, val) => prev + val, 0);
    const des = sum / Number(this.clients.length - 1);
    return Math.sqrt(des).toFixed(2);
  }

  ngAfterViewInit() {
    this.service.getClients().subscribe((res) => {
      this.clients = res.map((e: any) => {
      
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
          age: getAge(e.payload.doc.data().birthdate),
        } as ClientModel;
      });
      
      this.dataSource = this.clients;
      this.isLoading = false;      
    });
  }
}
