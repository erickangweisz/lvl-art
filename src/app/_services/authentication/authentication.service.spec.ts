import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../../app-config.module';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ],
    providers: [ 
      HttpClient,
      { provide: APP_CONFIG, useValue: AppConfig }
    ]
  }));

  /*it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });*/
});
