import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { APP_CONFIG, AppConfig } from 'src/app/app-config.module'

import { UserService } from 'src/app/_services'

import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ 
        UserService, 
        { provide: APP_CONFIG, useValue: AppConfig } 
      ],
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
