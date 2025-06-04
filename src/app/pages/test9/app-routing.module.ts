import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { AddPetComponent } from './add-pet/add-pet.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'add-pet', component: AddPetComponent },
  { path: '', redirectTo: '/pets', pathMatch: 'full' },
  { path: '**', redirectTo: '/pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  