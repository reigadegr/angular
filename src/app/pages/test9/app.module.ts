// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AppComponent9} from './app.component';
import { PetsComponent } from './pets/pets.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsService } from './pets.service';

@NgModule({
  declarations: [
    AppComponent9,
    PetsComponent,
    AddPetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'pets', component: PetsComponent },
      { path: 'add-pet', component: AddPetComponent },
      { path: '', redirectTo: 'pets', pathMatch: 'full' },
      { path: '**', redirectTo: 'pets' }
    ])
  ],
  providers: [PetsService],
  bootstrap: [AppComponent9]
})
export class AppModule { }
