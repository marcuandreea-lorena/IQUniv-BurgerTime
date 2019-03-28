import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TopBreadComponent } from './top-bread/top-bread.component';
import { BottomBreadComponent } from './bottom-bread/bottom-bread.component';
import { SaladComponent } from './salad/salad.component';
import { CheeseComponent } from './cheese/cheese.component';
import { MeatComponent } from './meat/meat.component';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBreadComponent,
    BottomBreadComponent,
    SaladComponent,
    CheeseComponent,
    MeatComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
