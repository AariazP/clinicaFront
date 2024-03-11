import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./feature/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {UsuarioInterceptor} from "./core/services/interceptor.service";
import { FullCalendarModule } from '@fullcalendar/angular';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
