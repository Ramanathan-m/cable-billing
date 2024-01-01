import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@coreui/angular';
import { PayComponent } from "./pay.component";


@NgModule({
  declarations: [PayComponent],
  imports: [
    CommonModule,
    GridModule
  ],
  exports:[PayComponent]
})
export class PayModule { }
