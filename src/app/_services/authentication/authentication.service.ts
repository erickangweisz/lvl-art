import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module'
import { User } from 'src/app/_models'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  register(user: User) {
    return this.http.post(`${this.config.apiURL}/signup`, user)
      .subscribe(userRegistered => {
        console.log(userRegistered)
      })
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.config.apiURL}/login`, { email, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.currentUserSubject.next(user)
        }
        return user
      }))
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
    this.router.navigate(['home'])
  }
}