import { Routes } from '@angular/router';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { Test1Component } from './pages/test1/test1.component';
import { Test2Component } from './pages/test2/test2.component';
import { Test3Component } from './pages/test3/test3.component';
import { Test4Component } from './pages/test4/test4.component';
import { Test5Component } from './pages/test5/test5.component';
import { Test6Component } from './pages/test6/test6.component';
import { Test7Component } from './pages/test7/test7.component';
import { Test8Component } from './pages/test8/test8.component';
import { Test9Component } from './pages/test9/test9.component';
import { Test10Component } from './pages/test10/test10.component';



export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'monitor', component: MonitorComponent },
  { path:'test1', component: Test1Component },
  { path:'test2', component: Test2Component },
  { path:'test3', component: Test3Component },
  { path:'test4', component: Test4Component },
  { path:'test5', component: Test5Component },
  { path:'test6', component: Test6Component },
  { path:'test7', component: Test7Component },
  { path:'test8', component: Test8Component },
  { path:'test9', component: Test9Component },
  { path:'test10', component: Test10Component },
];
