import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  private _customers: any[] = [
    {
      "customerType": "test",
      "accountNumber": "test",
      "mobileNumber": "test",
      "plans": "test",
      "startDate": "test",
    }
  ];
  public get customers(): any[] {
    return this._customers;
  }
  public set customers(value: any[]) {
    this._customers = value;
  }

  public visible = false;
  showModal(test?:customer) {
    this.visible = !this.visible;
    if(test){
      this.customerForm.patchValue(test);
      }else{
        this.customerForm.reset()
      }
    // this.customerForm.reset();
  }
  closeModal(event: any) {
    this.visible = event;
  }

 customerForm!:FormGroup;

  customerSubmit(){
    // debugger;
    const data = this.customerForm.getRawValue();
    const _data = this._customers.find(x => x.accountNumber == data.accountNumber)
    if (_data) {
      _data.customerType = data.customerType
      _data.accountNumber = data.accountNumber
      _data.mobileNumber = data.mobileNumber
      _data.plans = data.plans
      _data.startDate = data.startDate
    }else{
    this._customers.push(data);
    this.visible=false;
    // this.customerForm.reset();
    }
  }
  loadComponent:boolean=false;
  loadMyChildComponent(){
   this.loadComponent=true;
  }
  loadchildcomponent:boolean=false
  loadpaycomponent(){
    this.loadchildcomponent = true;
  }
}
export interface customer{
  customerType: any,
  accountNumber: number,
  mobileNumber: number,
  plans:any,
  startDate:Date 
}





