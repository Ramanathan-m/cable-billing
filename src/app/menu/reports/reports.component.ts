import { Component } from '@angular/core';
import { cilArrowRight, cilChartPie } from '@coreui/icons';

@Component({
  selector: 'app-reports',
   templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
icons = { cilChartPie, cilArrowRight}
}
