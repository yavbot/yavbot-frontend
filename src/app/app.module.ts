import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { LoginComponent } from './login/login.component';
import { ChatbotComponent} from './chatbot/chatbot.component';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { IntentComponent } from './intent/intent.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
		ChatbotComponent
		IntentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
