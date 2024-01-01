import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent {
  customerDetail:any[]=[{
    "customerType":"test",
    "accountNumber":"test",
    "mobileNumber":"test",
    "plan":"test",
    "lastDate":"test"
  }];
  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
}
