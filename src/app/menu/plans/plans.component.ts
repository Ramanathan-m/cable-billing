import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  private _plans: plan[]=[];
  public get plans(): plan[] {
    return this._plans;
  }
  public set plans(value: plan[]) {
    this._plans = value;
  }
  public visible = false;

  toggleLiveDemo(test?:plan) {
    debugger;
    this.visible = true;
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
      _data.name = data.name;
      _data.description = data.description;
      _data.amount = data.amount;
    }else{
    this.plans.push(data);
    this.visible = false;
    // this.planFrom.reset();
    }
  }
}
export interface plan {
  code: any;
  name: string;
  description: string;
  amount: any;
}
