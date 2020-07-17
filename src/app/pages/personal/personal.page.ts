import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  componentes: Componente[] = [
    {
      icon:'alarm-outline',
      name:'Recordatorios',
      redirectTo: '/recordatorio'
   },
   {
      icon:'calendar-outline',
      name:'Agenda',
      redirectTo: '/agenda'
    },
    {
      icon:'book-outline',
      name:'Mi Diario',
      redirectTo: '/diario'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
