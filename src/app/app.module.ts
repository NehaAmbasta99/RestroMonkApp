import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
