import {Component, OnInit} from '@angular/core';
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuModule,
    MenubarModule
  ],
  template: `
    <div class="card">
      <p-menubar [model]="items">
        <img src="./favicon.ico" alt="Icon">
      </p-menubar>
    </div>
  `,
  styles: ``
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Angular pipes |',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Dates and texts',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'

          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Personalized Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ];
  }

}
