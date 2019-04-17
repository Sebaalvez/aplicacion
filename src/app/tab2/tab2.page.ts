import { Component } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
import { InvitadosService } from '../Service/invitados.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public invitados: InvitadosService) { }

  listaSorteo = this.invitados.ListaSorteo;
  sinGanador=true;
  conGanador= false;
  ganador="";

  realizarSorteo() {

    console.log(this.listaSorteo);
    
    let numerorandom = Math.floor((Math.random() * this.listaSorteo.length));
    for (let i = 0; i < this.listaSorteo.length; i++) {

      if (i==numerorandom) {

        this.ganador= this.listaSorteo[i].name + " " + this.listaSorteo[i].surname;
        this.sinGanador=false;
        this.conGanador= true;
        console.log(this.listaSorteo[i].name + " " + this.listaSorteo[i].surname)
        console.log(this.ganador);


      }
    }
  }



}
