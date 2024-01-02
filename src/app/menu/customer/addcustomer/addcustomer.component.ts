import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { CustomerType, Plan } from 'src/app/models/customer-model';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.scss'
})
export class AddcustomerComponent implements OnInit{

  constructor(private customerService:CustomerService){

  }

  customerForm!:FormGroup;
  ngOnInit(): void {
   
  }
  
  private _filterPlans: Plan[]=[];
  public get filterPlans(): Plan[] {
    return this._filterPlans;
  }
  public set filterPlans(value: Plan[]) {
    this._filterPlans = value;
  }
  public get customerType(): CustomerType[] {
    return this.customerService.customerType;
  }
  
  updatePlans(e:any){
    let cID = e.target.value ;
    this.filterPlans = this.customerService.plans.filter((f: Plan)=> f.customerType.id ==cID);
  }
  isActive=[
    {id: 1, name: "Active" },
    {id: 2, name: "Inactive" }
  ]
}
