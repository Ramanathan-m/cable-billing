import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  customer:any[]=[
    {
      "customerType":"test",
      "accountNumber":"test",
      "mobileNumber":"test",
      "plans":"test",
      "startDate":"test",
    }
  ]
  public visible = false;
  showModal() {
    this.visible = !this.visible;
    this.customerForm.reset();
  }
  closeModal(event: any) {
    this.visible = event;
  }

 customerForm!:FormGroup;
  ngOnInit(): void {
    this.customerForm=new FormGroup({
      customerType:new FormControl('',Validators.required),
      accountNumber: new FormControl('',Validators.required),
      mobileNumber: new FormControl('',Validators.required),
      plans: new FormControl('',Validators.required),
      startDate: new FormControl('',Validators.required)
    });
  }
  submit(){
    debugger;
    const data = this.customerForm.getRawValue();
    this.customer.push(data);
    this.visible=false;
    this.customerForm.reset();
  }

  customerType = [
    { id: 1, name: "Cable Customers" },
    { id: 2, name: "BSNL Customers" },
  ];
  plans:any=[
    {id: 1 , name: "001-cable-200" , c_id: 1},
    {id: 2 , name: "002-cable-300" , c_id: 1},
    {id: 3 , name: "003-BSNL-600" , c_id: 2},
    {id: 4 , name: "004-BSNL-700" , c_id: 2}
  ];
  filterPlans=this.plans;

  updatePlans(e:any){
    debugger;
    let cID = e.target.value;
    this.filterPlans = this.plans.filter((f: { [x: string]: any; })=> f['c_id']==cID);

  }

}





