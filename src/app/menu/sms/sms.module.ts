import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { ButtonModule, CalloutModule, CardModule, GridModule, TableModule } from '@coreui/angular';


@NgModule({
  declarations: [SmsComponent],
  imports: [
    CommonModule,
    SmsRoutingModule,
    TableModule,
    CardModule,
    GridModule,
    CalloutModule,
    ButtonModule
  ]
})
export class SmsModule { }
