import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module'
import { User } from 'src/app/_models'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  getAll() {
    return this.http.get<User[]>(`${this.config.apiURL}/users`)
  }

  createUser(user) {
    return this.http.post(`${this.config.apiURL}/register`, user)
  }

  updateUser(user: User) {
    return this.http.put(`${this.config.apiURL}/update-user/${user.id}`, user)
  }

  updateState(params: any) {
    let body = { userId: params.userId, state: params.state }
    return this.http.put(`${this.config.apiURL}/update-state/${params.userId}`, body)
  }

  changePassword(params: any) {
    let body = { newPassword: params.newPassword, currentPassword: params.currentPassword }
    return this.http.put(`${this.config.apiURL}/change-password/${params.userId}`, body)
  }

  setActiveStatus(params: any) {
    let body = { userId: params.userId, active: params.active }
    return this.http.put(`${this.config.apiURL}/set-active-status/${params.userId}`, body)
  }

  setStateOfSocialNetworkButtons(params: any) {
    let body: any
    if (params.hasOwnProperty('active_facebook')) {
      body = {
        userId: params.userId,
        active_facebook: params.active_facebook
      }
    } else if (params.hasOwnProperty('active_twitter')) {
      body = {
        userId: params.userId,
        active_twitter: params.active_twitter
      }
    } else if (params.hasOwnProperty('active_deviantart')) {
      body = {
        userId: params.userId,
        active_deviantart: params.active_deviantart
      }
    }
    return this.http.put(`${this.config.apiURL}/set-active-socialnetworks/${params.userId}`, body)
  }

  getUser(userId: string) {
    return this.http.get(`${this.config.apiURL}/user/${userId}`)
  }

  checkUsernameIsRegistered(username) {
    return this.http.post(`${this.config.apiURL}/check-username`, { body: username })
  }

  checkEmailIsRegistered(email) {
    return this.http.post(`${this.config.apiURL}/check-email`, { body: email })
  }

  checkBirthday(birthday) {
    return this.http.post(`${this.config.apiURL}/check-birthday`, { body: birthday })
  }

  recoverPassword(email) {
    return this.http.post(`${this.config.apiURL}/recover-password`, { body: email })
  }
}
