import {Routes} from '@angular/router';
import {BasicsPageComponent} from "./products/pages/basics-page/basics-page.component";
import {NumbersPageComponent} from "./products/pages/numbers-page/numbers-page.component";
import {UncommonPageComponent} from "./products/pages/uncommon-page/uncommon-page.component";
import {OrderComponent} from "./products/pages/order/order.component";

export const routes: Routes = [
  {path: '', component: BasicsPageComponent},
  {path: 'numbers', component: NumbersPageComponent},
  {path: 'uncommon', component: UncommonPageComponent},
  {path: 'custom', component: OrderComponent},
  {path: '**', redirectTo: ''}
];
