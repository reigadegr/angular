import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SameRandomComponent } from './same-random/same-random.component';
import { DifferentRandomComponent } from './different-random/different-random.component';
import { NewRandomComponent } from './new-random/new-random.component';
import { RandomNumberService } from './random-number.service';

@NgModule({
  declarations: [
    AppComponent,
    SameRandomComponent,
    DifferentRandomComponent,
    NewRandomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RandomNumberService], // 在根模块提供服务
  bootstrap: [AppComponent]
})
export class AppModule { }