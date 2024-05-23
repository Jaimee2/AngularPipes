import {Component} from '@angular/core';
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {AsyncPipe, I18nPluralPipe, JsonPipe, SlicePipe} from "@angular/common";
import {interval, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    FieldsetModule,
    PanelModule,
    ButtonModule,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    AsyncPipe
  ],
  template: `

    <p-panel class="p-2" header="Number Pipes |">
      <p>
        Pipes that are already included in Angular
      </p>
    </p-panel>

    <div class="grid">
      <div class="col-12 md:col-6">
        <p-fieldset [toggleable]="true" legend="i18nSelect">

          <p>
            Hi {{ name }}, is a pleasure to invite you at our event!
          </p>

          <p-button (click)="changeClient()" label="Change person">
          </p-button>

        </p-fieldset>
      </div>
      <div class="col-12 md:col-6">
        <p-fieldset [toggleable]="true" legend="i18Plural">

          <p>
            {{ clientList.length | i18nPlural: clientsMap }}
            {{ clientList.length }}
          </p>

          <p-button (click)="deleteClients()" label="pop">
          </p-button>

        </p-fieldset>
      </div>
      <div class="col-12 md:col-6">
        <p-fieldset [toggleable]="true" legend="Slice">
          <pre> {{ clientList | slice:1 }} </pre>
        </p-fieldset>
      </div>
      <div class="col-12 md:col-6">
        <p-fieldset [toggleable]="true" legend="Json">
          <pre>{{ person | json }}</pre>
        </p-fieldset>
      </div>
      <div class="col-12 md:col-6">
        <p-fieldset [toggleable]="true" legend="KeyValue">
          :)
        </p-fieldset>
      </div>
      <div class="col-12 md:col-6">

        <p-fieldset [toggleable]="true" legend="Async">
          @if (!(myObservable| async)) {
            Resolving observable....
          } @else {
            {{ myObservable | async }}
          }
        </p-fieldset>
      </div>
    </div>
  `,
  styles: ``
})
export class UncommonPageComponent {
  name: string = 'Jaime';
  gender: 'male' | 'female' = 'male';
  clientList: string[] = ['Jaime', 'Charly', 'Arturito'];

  clientsMap = {
    '=0': 'not element in the list',
    '=1': 'there is',
    'other': 'there are'
  }

  person = {
    name: 'Jaime',
    age: '99',
    address: 'The world'
  }

  changeClient(): void {
    this.name = 'Xanthe'
  }

  deleteClients(): void {
    this.clientList.pop();
  }

  myObservable = interval(1000).pipe();

}
