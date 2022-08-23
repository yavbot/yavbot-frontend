import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { LoginComponent } from './login/login.component';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { IntentComponent } from './intent/intent.component';
import { ChatComponent } from './chat/chat.component';




@NgModule({
  declarations: [
    AppComponent,
		IntentComponent,
    LoginComponent,
    ChatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
