import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, TableModule } from '@coreui/angular';
import { PlansComponent } from "./plans.component";


@NgModule({
  declarations: [PlansComponent],
  imports: [
    CommonModule,
    PlansRoutingModule,
    ReactiveFormsModule,
    ModalModule,
    GridModule,
    TableModule,
    FormModule,
    ButtonModule,
    CardModule
    
    
  ]
})
export class PlansModule { }
