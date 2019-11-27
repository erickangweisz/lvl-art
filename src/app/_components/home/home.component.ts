import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'

import { User } from 'src/app/_models'
import { UserService } from 'src/app/_services'

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  users: Array<User>

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(res => {
      this.users = res['users']
    })
  }

}
