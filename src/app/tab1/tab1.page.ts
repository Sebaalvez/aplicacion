import { Component } from '@angular/core';
import { InvitadosService } from '../Service/invitados.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public invitados: InvitadosService, public alertController: AlertController) {
    this.mostrarInvitados();
    this.invitados.getInvitados();
    this.listaInvitado = this.invitados.returnInvitados;
    this.invitados.ListaSorteo=this.listaIngresado;
  }

  listaInvitado = [];
  listaIngresado = [];
  invitado = true;
  ingresado = false;


  agregarInvitado(invitado) {

    this.listaIngresado.push(invitado);
    for (let i = 0; i < this.listaInvitado.length; i++) {

      if (invitado == this.listaInvitado[i]) {
        this.listaInvitado.splice(i, 1);
      }
    }

  }

  
  eliminarIngresado(invitado) {

    this.listaInvitado.push(invitado);
    for (let i = 0; i < this.listaIngresado.length; i++) {

      if (invitado == this.listaIngresado[i]) {
        this.listaIngresado.splice(i, 1);
      }
    }

  }

  mostrarInvitados() {
    this.invitado = true;
    this.ingresado = false;
    this.listaInvitado = this.invitados.returnInvitados;

  }

  mostrarIngresos() {
    this.invitado = false;
    this.ingresado = true;
  }


  async confirmarIngreso(invitado) {
    const alert = await this.alertController.create({
      header: 'Ingreso',
      // subHeader: 'Subtitle',
      message: 'Desea ingresar al invitado seleccionado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'submit',
          handler: data => {

          }
        },
        {
          text: 'Aceptar',
          role: 'cancel',
          handler: data => {
            this.agregarInvitado(invitado);

          }
        }
      ]
    });

    await alert.present();
  }

  async confirmarEliminacion(invitado) {
    const alert = await this.alertController.create({
      header: 'Eliminar',
      // subHeader: 'Subtitle',
      message: 'Desea quitar al invitado seleccionado de la lista de ingreso?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'submit',
          handler: data => {

          }
        },
        {
          text: 'Aceptar',
          role: 'cancel',
          handler: data => {
            this.eliminarIngresado(invitado);

          }
        }
      ]
    });

    await alert.present();
  }

}
