import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {interval, tap} from "rxjs";

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  template: `
    <p-panel class="p-2" header="Basic Pipes |">
      <p>
        Pipes that are already included in Angular
      </p>
    </p-panel>

    <div class="grid">
      <div class="col-12 md:col-6 lg:col-4">
        <p-card header="uppercase">
          {{ nameLower | uppercase }}
        </p-card>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <p-card header="lowercase">
          {{ nameUpper | lowercase }}
        </p-card>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <p-card header="titlecase">
          {{ fullName | titlecase }}
        </p-card>
      </div>
    </div>

    <div class="col-12">
      <p-card header="date">
        {{ customDate | date }}
        {{ customDate | date:'long':'GMT+2' }} - Madrid
      </p-card>
    </div>


  `,
  styles: [`
        @media (max-width: 500px) {
          p {
            color: red;
          }
        }
  `]
})
export class BasicsPageComponent {

  nameLower: string = 'jaime';
  nameUpper: string = 'JAIME';
  fullName: string = 'JaiMe HiGueras';
  customDate: Date = new Date();


}
