import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from "./reports.component";
import { CalloutModule, CardModule, FormModule, GridModule, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    GridModule,
    CardModule,
    FormModule,
    CalloutModule,
    WidgetModule,
    IconModule
  ]
})
export class ReportsModule {};
