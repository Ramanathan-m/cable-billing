import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, TableModule } from '@coreui/angular';


@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    ReactiveFormsModule,
    GridModule,
    ButtonModule,
    TableModule,
    ModalModule,
    CardModule,
    FormModule
  ],
  exports: [BillingComponent ]
})
export class BillingModule { }
