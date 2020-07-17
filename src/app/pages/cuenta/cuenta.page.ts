import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  componentes: Componente [] = [
    {
      icon:'fitness-outline',
      name:'Prevencion',
      redirectTo: '/prevencion'
   },
   {
      icon:'medkit-outline',
      name:'Diagnóstico oportuno',
      redirectTo: '/eis'
    },
    {
      icon:'create-outline',
      name:'Espacio personal',
      redirectTo: '/personal'
    },
  ];
  
  constructor() { 

  }

  ngOnInit() {
 
}
}



interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
