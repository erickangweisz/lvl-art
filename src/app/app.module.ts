import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppConfigModule } from './app-config.module'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtInterceptor, ErrorInterceptor } from './_helpers'

import { AppComponent } from './app.component'
import { HomeComponent } from './_components'
import { LoginComponent } from './_components'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConfigModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
