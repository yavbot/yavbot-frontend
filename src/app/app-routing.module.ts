import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  {
    path: 'chatbot',
    component: ChatbotComponent
  },
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
