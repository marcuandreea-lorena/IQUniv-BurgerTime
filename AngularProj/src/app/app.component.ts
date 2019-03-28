import { Component } from '@angular/core';
import { TopBreadComponent } from './top-bread/top-bread.component';
import { SaladComponent } from './salad/salad.component';
import { CheeseComponent } from './cheese/cheese.component';
import { MeatComponent } from './meat/meat.component';
import { BottomBreadComponent } from './bottom-bread/bottom-bread.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProj';
  // public burger = burger;
}
// const burger = {
//   TopBreadComponent,
//   SaladComponent,
//   CheeseComponent,
//   MeatComponent,
//   BottomBreadComponent
// };
