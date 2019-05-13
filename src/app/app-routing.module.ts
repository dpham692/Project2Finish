// Modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components


import { InfoComponent } from './components/info/info.component';
import { RegisterComponent } from './register/register.component';
import { AllComponent } from './all/all.component';
import { FindComponent } from './find/find.component';

export const routes: Routes = [
  { path: '', redirectTo: 'find', pathMatch: 'full' },
  { path: 'register',  component: RegisterComponent },
  { path: 'all',  component: AllComponent },
  { path: 'find',  component: FindComponent },
  { path: 'info',  component: InfoComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}