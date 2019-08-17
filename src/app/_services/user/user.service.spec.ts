import { InjectionToken } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module'

import { UserService } from './user.service'

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ 
      HttpClient,
      UserService,
      InjectionToken,
      { provide: APP_CONFIG, useValue: AppConfig }
    ],
    imports: [ HttpClientModule ]
  }))

  /*it('should be created', () => {
    const service: UserService = TestBed.get(UserService)
    expect(service).toBeTruthy()
  })*/
})