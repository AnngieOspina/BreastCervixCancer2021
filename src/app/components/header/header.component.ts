import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private actionSheetCtrl:
    ActionSheetController) { }


    ngOnInit() {}

   

    async presentActionSheet() {
     const actionSheet = await this.actionSheetCtrl.create({
       header: 'Opciones',
       buttons: [{
         text: '¿Quénes somos?',
         icon: 'home',
         handler: () => {
           console.log('Delete clicked');
         }
       }, {
         text: 'Compartir',
         icon: 'share',
         handler: () => {
           console.log('Share clicked');
         }
       }, {
         text: 'Favorite',
         icon: 'heart',
         handler: () => {
           console.log('Favorite clicked');
         }
       }, {
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


