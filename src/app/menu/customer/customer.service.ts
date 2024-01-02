import { Injectable } from '@angular/core';
import { Plan, customer, CustomerType } from '../../models/customer-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  private _customers: customer[] = [
    {
      "customerType": "test",
      "accountNumber": 636367676762,
      "mobileNumber": 7747873473,
      "customerPlan": {} as Plan,
      "startDate": new Date(),
    }
  ];

  public get customers(): customer[] {
    return this._customers;
  }
  public set customers(value: customer[]) {
    this._customers = value;
  }
  customerForm:FormGroup<any>=new FormGroup({
    customerType:new FormControl('',Validators.required),
    accountNumber: new FormControl('',Validators.required),
    mobileNumber: new FormControl('',Validators.required),
    plans: new FormControl('',Validators.required),
    startDate: new FormControl('',Validators.required)
  });
  customerType: CustomerType[] = [
    { id: 1, descriptions: "Cable " },
    { id: 2, descriptions: "BSNL " },
  ];
  plans: Plan[] = [
    { id: 1, code: "001", descriptions: "Basic plan", customerType: { id: 1, descriptions: "Cable" } as CustomerType, amount: 200 },
    { id: 2, code: "002", descriptions: "Sport Plan", customerType: { id: 1, descriptions: "Cable" } as CustomerType, amount: 230 },
    { id: 3, code: "003", descriptions: "Basic internet", customerType: { id: 2, descriptions: "BSNL" } as CustomerType, amount: 899 },
    { id: 4, code: "004", descriptions: "Premium internet", customerType: { id: 1, descriptions: "Cable" } as CustomerType, amount: 799 }
  ];
}
