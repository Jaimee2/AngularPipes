import {Component} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {CurrencyPipe, DecimalPipe, PercentPipe, TitleCasePipe} from "@angular/common";
import {ToggleCasePipe} from "../../pipes/toggle-case.pipe";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {TableModule} from "primeng/table";
import {CanFlyPipe} from "../../pipes/can-fly.pipe";
import {SortByPipe} from "../../pipes/short-by.pipe";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    ToggleCasePipe,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    CanFlyPipe,
    TitleCasePipe,
    SortByPipe
  ],
  template: `
    <p-panel class="p-2" header="Basic Pipes |">
      <p>
        Custom Pipes created by {{ 'we' | toggleCase: isUpperCase }}
      </p>
    </p-panel>

    <p-toolbar>
      <div class="p-toolbar-group-start">
        <p-button (click)="toggleUpperCase()"
                  class="mr-2"
                  icon="pi pi-plus"
                  label="ToggleCase"
        />
      </div>

      <div class="p-toolbar-group-end">
        <p-button class="mr-2"
                  icon="pi pi-sort"
                  label="By name"
                  styleClass="p-button-danger"
                  (click)="changeOrderBy('name')"
        />
        <p-button class="mr-2"
                  icon="pi pi-sort"
                  label="By fly?"
                  styleClass="p-button-danger"
                  (click)="changeOrderBy('canFly')"
        />
        <p-button class="mr-2"
                  icon="pi pi-sort"
                  label="By color"
                  styleClass="p-button-help"
                  (click)="changeOrderBy('color')"
        />

      </div>
    </p-toolbar>

    <div class="grid">
      <div class="col mt-2">
        <p-table [tableStyle]="{ 'min-width': '50rem' }"
                 [value]="heroes | sortBy:orderBy"
        >
          <ng-template pTemplate="header">
            <tr>
              <th>Name</th>
              <th>Fly</th>
              <th>Color</th>
            </tr>
          </ng-template>
          <ng-template let-hero pTemplate="body">
            <tr>
              <td>{{ hero.name }}</td>
              <td>{{ hero.canFly | canFly | titlecase }}</td>
              <td>{{ hero.color }}</td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>


  `,
  styles: ``
})
export class OrderComponent {

  isUpperCase: boolean = false;
  orderBy: string = 'name'

  heroes: any[] = [
    {
      name: 'Superman',
      canFly: true,
      color: 'blue'
    },
    {
      name: 'Batman',
      canFly: false,
      color: 'black'
    },
    {
      name: 'A',
      canFly: false,
      color: 'yellow'
    }
  ]

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrderBy(value: string) {
    this.orderBy = value;
  }

}
