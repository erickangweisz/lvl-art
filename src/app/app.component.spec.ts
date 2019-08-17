import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { APP_CONFIG, AppConfig } from 'src/app/app-config.module'

import { AppComponent } from './app.component'
import { NavbarComponent } from './_components'
import { LoginFormComponent } from './_components'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        LoginFormComponent
      ],
      providers: [
        { provide: APP_CONFIG, useValue: AppConfig }
      ]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
