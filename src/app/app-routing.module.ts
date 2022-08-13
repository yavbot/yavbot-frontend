import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntentComponent } from './intent/intent.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{path: 'intent', component: IntentComponent},
	{path: 'intent/:id', component: IntentComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
