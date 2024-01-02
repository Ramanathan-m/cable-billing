import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { CustomerService } from './customer.service'
import {customer} from '../../models/customer-model'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  private _customerForm: any;
  public get customerForm(): any {
    return this._customerForm;
  }
  public set customerForm(value: any) {
    this._customerForm = value;
  }
  iscomp: string = '';
  constructor(private customerService: CustomerService) {
    this.customerForm=this.customerService.customerForm;
  }

  public get customers(): customer[] {
    return this.customerService.customers;
  }

  public visible = false;
  showModal(test?: any) {
    this.iscomp = test;
    this.visible = !this.visible;

  }
  closeModal(event: any) {
    this.visible = event;
  }

  customerSubmit() {
    const data = this.customerService.customerForm.getRawValue();
    let _data = this.customerService.customers.find(x => x.accountNumber == data.accountNumber)
    if (_data) {
      _data.customerType = data.customerType;
      _data.accountNumber = data.accountNumber;
      _data.mobileNumber = data.mobileNumber;
      _data.customerPlan = data.customerPlan;
      _data.startDate = data.startDate;
      this.visible = false;
    } else {
      this.customerService.customers.push(data);
      this.visible = false;
    }
  }

}





