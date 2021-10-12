import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ClientModel } from '../models/clients.model';
import { ClientService } from '../services/clients.service';
import { getAge } from '../utils/share-functions';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent implements OnInit {
  public id: string;
  isLoading = true;
  client: ClientModel;
  public getAge = getAge

  constructor(private route: ActivatedRoute, private service: ClientService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.service.getClientDoc(this.id).subscribe((c) => {
      this.client = c;
      this.isLoading = false;
    });
  }

  getDateOfDeath(date) {
    //Fuente: https://datos.bancomundial.org/indicador/sp.dyn.le00.in?locations=PE
    const lifespan = 77;
    const deathDate = moment().add(lifespan - getAge(date), 'years');
    return moment(deathDate).format('DD/MM/YYYY');
  }
}