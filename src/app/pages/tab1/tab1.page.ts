import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit  {

event= {
title:'',
desc:'',
startTime:'',
endTime:'',
allDay:false

};

  minDate= new Date().toISOString();

  eventSource = [];
  viewTitle: string;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  ViewTitle=''; 

  @ViewChild(CalendarComponent, null) myCal:CalendarComponent;
  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID)private locale: string) {}

  ngOnInit(){
 this.resetEvent();

  }
  resetEvent(){
    this.event= {
      title:'',
      desc:'',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay:false
    };
  }



addEvent(){
 let eventCopy= {
   title: this.event.title,
   startTime: new Date(this.event.startTime),
   endTime:new Date(this.event.endTime),
   allDay:this.event.allDay,
   desc:this.event.desc
 }
if (eventCopy.allDay){
  let start= eventCopy.startTime;
let end= eventCopy.endTime;

  eventCopy.startTime= new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
  eventCopy.endTime= new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()+1));



}
this.eventSource.push(eventCopy)
this.myCal.loadEvents();
this.resetEvent();
}

changeMode(mode){

  this.calendar.mode =mode;
}

back(){
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}

today(){
  this.calendar.currentDate = new Date();
}

next(){

  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}

 async onEventSelected(event){
let start = formatDate(event.startTime, 'medium', this.locale);
let end = formatDate(event.endTime, 'medium', this.locale);

const alert = await this.alertCtrl.create({
  header: event.title,
  subHeader: event.desc,
  message: 'Desde: ' + start + '<br><br>Hasta: ' +end,
  buttons: ['Sí']
});
alert.present();

}

 onViewTitleChanged(title){
 this.viewTitle= title;
}
onTimeSelected(ev){
let selected= new Date(ev.selectedTime);
this.event.startTime= selected.toISOString();
selected.setHours(selected.getHours()+1);
this.event.endTime= (selected.toISOString());
}
 
 
}