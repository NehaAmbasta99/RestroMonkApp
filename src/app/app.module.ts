import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from 'src/app/user/user.component';
import { MenuComponent } from 'src/app/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
