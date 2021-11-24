import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private actionSheetCtrl:
    ActionSheetController, private router: Router) { }


    ngOnInit() {}

    async presentActionSheet() {
     const actionSheet = await this.actionSheetCtrl.create({
       header: 'Opciones',
       buttons: [
        {
          text: 'Inicio',
          icon: 'home',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }, {
         text: '¿Quénes somos?',
         icon: 'finger-print',
         handler: () => {
          this.router.navigate(['/nosotros']);
         }
       },  {
         text: 'Cancelar',
         icon: 'close',
         role: 'cancel',
         cssClass:'rojo',
         handler: () => {
           console.log('Cancel clicked');
         }
       }]
     });
     await actionSheet.present();
   }
 
 }


