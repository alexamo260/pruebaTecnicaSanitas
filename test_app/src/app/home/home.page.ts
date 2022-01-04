import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mostrarPassword = false;
  iconoPassword = 'eye';
  email:string;
  password:string;
  mensaje:string;
  iconoPopup:string;

  constructor(public navCtrl: NavController, public toastController: ToastController) { }

  cambiarIconoPassword(){
    this.mostrarPassword = !this.mostrarPassword;
    if(this.iconoPassword == 'eye'){
      this.iconoPassword = 'eye-off';
    }else{
      this.iconoPassword = 'eye';
    }
  }

  login(){
    console.log("Email introducido: " + this.email);
    console.log("Password introducido: " + this.password);
    if((this.email && this.email !== "" && this.email.indexOf('@') !== -1) && (this.password && this.password.length >= 5)){
      this.mensaje = 'Login correcto';
      this.iconoPopup = 'checkmark-outline';
      this.mostrarPopupLogin(this.mensaje, this.iconoPopup); 
    }else{
      this.mensaje = 'Login incorrecto, introduzca valores adecuados';
      this.iconoPopup = 'warning';
      this.mostrarPopupLogin(this.mensaje, this.iconoPopup);  
    }
  }

  mostrarPopupLogin(mensaje, iconoPoup){
    this.toastController.create({
      message: mensaje,
      position: 'bottom',
      cssClass: 'toast-truce',
      buttons: [
        {
          side: 'end',
          icon: iconoPoup
        }, {
          side: 'end',
          text: 'CERRAR',
          role: 'cancel'
        }
      ]
    }).then((toast) => {
      toast.present();
    });
  }

}
