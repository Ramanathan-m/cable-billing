import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plan } from 'src/app/models/customer-model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
 
  constructor(private customerService:CustomerService)
  {}
  public get plans(): Plan[] {
    return this.customerService.plans;
  }
  
  public visible = false;

  toggleLiveDemo(test?:Plan) {
    debugger;
    this.visible =!this.visible;
    if(test){
     this.planFrom.patchValue(test);
    }else{
     this.planFrom.reset()
    }
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  planFrom!: FormGroup;
  ngOnInit(): void {
    this.planFrom = new FormGroup({
     code:new FormControl('',Validators.required),
     name:new FormControl('',Validators.required),
     description:new FormControl('',Validators.required),
     amount:new FormControl('',Validators.required),
    })
  }
  planSubmit(){
    debugger;
    const data = this.planFrom.getRawValue();
    let _data = this.plans.find(x => x.code == data.code);
    if (_data) {
      _data.code = data.code;
      _data.descriptions = data.description;
      _data.amount = data.amount;
      this.visible = false;
    }else{
    this.plans.push(data);
    this.visible = false;
    this.planFrom.reset();
    }
  }
}

