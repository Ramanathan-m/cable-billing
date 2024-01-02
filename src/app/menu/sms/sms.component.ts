import { Component } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrl: './sms.component.scss'
})
export class SmsComponent {
sms:any[]=[{
  accountNumber:'7667238728',
  mobileNumber:'811003837',
  customerName:'Ramanathan',
  plan:'001-cable-testdata-200',
  lastDate:'04/01/2024'
}]
}
