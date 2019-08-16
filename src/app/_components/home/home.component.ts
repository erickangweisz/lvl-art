import { Component } from '@angular/core'
import { first } from 'rxjs/operators'

import { User } from 'src/app/_models'
import { UserService } from 'src/app/_services'

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  users: Array<User>

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getAll().pipe(first()).subscribe(res => {
      this.users = res['users']
    })
  }
}