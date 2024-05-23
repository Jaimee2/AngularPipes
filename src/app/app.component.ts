import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SlicePipe} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {PrimeNGConfig} from "primeng/api";
import {MenuComponent} from "./shared/components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SlicePipe, ButtonModule, MenuComponent],
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {

    }
  `]
})
export class AppComponent implements OnInit {
  name: string = "Jaime";

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

