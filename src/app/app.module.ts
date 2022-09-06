import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponentComponent } from './right-component/right-component.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { MiddleComponentComponent } from './middle-component/middle-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponentComponent,
    LeftComponentComponent,
    MiddleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
