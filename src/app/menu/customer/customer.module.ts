import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from "./customer.component";
import { ButtonModule, CalloutModule, CardModule, FormModule, GridModule, ModalModule, TableModule } from '@coreui/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingModule } from '../billing/billing.module';
import {AddcustomerComponent} from "./addcustomer/addcustomer.component";
import { CustomerhistoryComponent } from "./customerhistory/customerhistory.component";
import { PayComponent } from "./pay/pay.component";

@NgModule({
    declarations: [CustomerComponent,AddcustomerComponent,CustomerhistoryComponent,PayComponent],
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
        FormModule,
        CalloutModule

    ],
    exports:[PayComponent]
})
export class CustomerModule { 

}
