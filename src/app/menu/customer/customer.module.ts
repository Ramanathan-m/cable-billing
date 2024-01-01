import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from "./customer.component";
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, TableModule } from '@coreui/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    GridModule,
    CardModule,
    TableModule,
    ModalModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule
  
  ]
})
export class CustomerModule { 

}
