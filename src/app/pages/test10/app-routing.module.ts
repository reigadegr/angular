import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconDividerComponent } from './components/button-icon-divider/button-icon-divider.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';

const routes: Routes = [
  { path: 'buttons-icons', component: ButtonIconDividerComponent },
  { path: 'grid-layout', component: GridLayoutComponent },
  { path: '', redirectTo: '/buttons-icons', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }