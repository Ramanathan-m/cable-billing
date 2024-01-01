import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcustomerComponent } from "./addcustomer.component";
import { ButtonModule, FormModule, GridModule, ModalModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddcustomerComponent],
  imports: [
    CommonModule,
    ModalModule,
    GridModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule

  ],
  exports:[AddcustomerComponent]
})
export class AddcustomerModule { }
