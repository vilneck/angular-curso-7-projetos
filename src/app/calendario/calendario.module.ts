import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { CalendarioComponent } from './calendario.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    CommonModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CalendarioModule { }
