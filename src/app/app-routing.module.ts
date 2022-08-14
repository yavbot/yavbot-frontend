import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatbotComponent } from './chatbot/chatbot.component';
import { IntentComponent } from './intent/intent.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
	{path: 'intent', component: IntentComponent},
	{path: 'intent/:id', component: IntentComponent},
  {path: 'chatbot', component: ChatbotComponent},
	
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'chatbot'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
