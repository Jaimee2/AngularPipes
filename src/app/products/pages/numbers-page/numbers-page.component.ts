import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    CardModule,
    DatePipe,
    LowerCasePipe,
    PanelModule,
    TitleCasePipe,
    UpperCasePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe
  ],
  template: `
    <p-panel class="p-2" header="Number Pipes |">
      <p>
        Pipes that are already included in Angular
      </p>
    </p-panel>

    <div class="grid">
      <div class="col-12 md:col-6 lg:col-4">
        <p-card header="net sales" subheader="2024">
          {{ netSales | number }}
        </p-card>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <p-card header="currency" subheader="EUR">
          {{ netSales | currency:'EUR' }}
        </p-card>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <p-card header="titlecase" subheader=";)">
          {{ percent | percent }}
        </p-card>
      </div>
    </div>

    <div class="col-12">
      <p-card header="date">

      </p-card>
    </div>
  `,
  styles: ``
})
export class NumbersPageComponent {
  netSales: number = 333232323.23;
  percent: number = 0.48;
}
