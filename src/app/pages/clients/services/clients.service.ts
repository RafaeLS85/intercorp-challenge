import { Injectable } from '@angular/core';
import { ClientModel } from '../models/clients.model';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private collectionName = 'clients';
  private itemsCollection: AngularFirestoreCollection<ClientModel>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<ClientModel>(
      this.collectionName
    );
  }

  createClient(item: ClientModel): Promise<any> {
    return this.itemsCollection.add(item);
  }

  getClientDoc(id) {
    return this.afs.collection(this.collectionName).doc(id).valueChanges();
  }

  getClients() {
    return this.afs.collection(this.collectionName).snapshotChanges();
  }

  deleteClient(client: ClientModel) {
    return this.afs.collection(this.collectionName).doc(client.id).delete();
  }

  updateClient(client: ClientModel, id) {
    return this.afs
      .collection(this.collectionName)
      .doc(id)
      .update({
        ...client,
      });
  }
}
