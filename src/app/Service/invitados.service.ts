import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tab1Page } from '../tab1/tab1.page';

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {

  constructor(public http: HttpClient) {
    this.getInvitados();
   // lista.invitados= this.returnInvitados;
  }

  api = 'https://uinames.com/api/?amount=50'
  returnInvitados;
  ListaSorteo;

  public getInvitados() {
    this.http.get(this.api).subscribe(
      (res) => {
        this.returnInvitados = res;  
        console.log('prueba' + this.returnInvitados);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
